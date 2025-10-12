// src/pages/AdminApplications.tsx

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, ArrowLeft, Eye, FileText } from "lucide-react";

// --- Type Definition for a single Application Document ---
// Adjust this interface to match your actual Firestore document structure
// interface Application {
//   id: string; // Document ID
//   fullName: string;
//   email: string;
//   type: "mentor" | "mentee"; // Assuming a type field exists
//   status: "pending" | "approved" | "rejected";
//   createdAt: Date;
// }

interface Application {
  id: string; // Document ID
  fullName: string;
  email: string;
  type: "mentor" | "mentee"; // CRITICAL: This field is now set during fetching
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  // Include all fields present in ALL_HEADERS for the export to work correctly
  areasOfInterest?: string[];
  areasOfExpertise?: string[];
  cadence?: string;
  currentChallenge?: string;
  roleTitle?: string;
  organization?: string;
  regionOfOperation?: string;
  mentorshipFormat?: string;
  delivery?: string;
  supportNeeded?: string;
  feelingStretched?: string;
  otherArea?: string;
  yearsInLeadership?: number;
}

const PAGE_SIZE = 10;
const ORDER_BY_FIELD = "createdAt";

// Helper function to convert JSON data to a CSV string
const convertToCSV = (data: any[], headers: string[]): string => {
  // 1. Create the header row
  const csvHeaders = headers.join(",") + "\n";

  // 2. Create the data rows
  const csvRows = data
    .map((row) => {
      return headers
        .map((header) => {
          let value = row[header];

          // Handle array values (like skills) by joining them
          if (Array.isArray(value)) {
            value = value.join("; ");
          }

          // Handle Date/Timestamp objects
          if (value instanceof Date) {
            value = value.toISOString();
          }

          // Ensure that values containing commas, quotes, or newlines are enclosed in double quotes
          if (
            typeof value === "string" &&
            (value.includes(",") || value.includes('"') || value.includes("\n"))
          ) {
            value = `"${value.replace(/"/g, '""')}"`;
          }

          return value;
        })
        .join(",");
    })
    .join("\n");

  return csvHeaders + csvRows;
};

// Helper function to trigger the browser download
const downloadFile = (data: string, filename: string, mimeType: string) => {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// --- Data Fetching Hook using TanStack Query ---
// const useApplications = () => {
//   return useQuery({
//     queryKey: ["applications"],
//     queryFn: async (): Promise<Application[]> => {
//       const applicationsRef = collection(db, "applications");
//       // Fetch all applications, ordered by creation date (newest first)
//       const q = query(applicationsRef, orderBy("createdAt", "desc"));
//       const snapshot = await getDocs(q);

//       return snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         // Convert Firebase Timestamp to JavaScript Date if needed
//         createdAt: doc.data().createdAt?.toDate
//           ? doc.data().createdAt.toDate()
//           : new Date(doc.data().createdAt),
//       })) as Application[];
//     },
//     staleTime: 1000 * 60 * 2, // Data considered fresh for 2 minutes
//   });
// };

// --- DATA FETCHING HOOK: UPDATED TO FETCH FROM TWO COLLECTIONS ---
const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: async (): Promise<Application[]> => {
      // Define references for both new collections
      const menteeRef = collection(db, "menteeApplications");
      const mentorRef = collection(db, "mentorApplications");

      // Fetch from both collections in parallel
      const [menteeSnapshot, mentorSnapshot] = await Promise.all([
        getDocs(query(menteeRef, orderBy("createdAt", "desc"))),
        getDocs(query(mentorRef, orderBy("createdAt", "desc"))),
      ]);

      // Map and tag mentee data
      const menteeApplications: Application[] = menteeSnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
          type: "mentee", // Assign 'mentee' type based on collection
          createdAt: doc.data().createdAt?.toDate
            ? doc.data().createdAt.toDate()
            : new Date(doc.data().createdAt),
        })
      ) as Application[];

      // Map and tag mentor data
      const mentorApplications: Application[] = mentorSnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
          type: "mentor", // Assign 'mentor' type based on collection
          createdAt: doc.data().createdAt?.toDate
            ? doc.data().createdAt.toDate()
            : new Date(doc.data().createdAt),
        })
      ) as Application[];

      // Combine and sort all applications by date (newest first)
      const allApplications = [...menteeApplications, ...mentorApplications];
      allApplications.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );

      return allApplications;
    },
    staleTime: 1000 * 60 * 2, // Data considered fresh for 2 minutes
  });
};

const AdminApplications = () => {
  const [page, setPage] = useState(0); // 0-indexed page number
  const [filterStatus, setFilterStatus] = useState<string>("pending");
  const { loading: authLoading, isAdmin } = useAdminAuth();
  const {
    data: applications,
    isLoading: dataLoading,
    error: dataError,
  } = useApplications();
  const navigate = useNavigate();

  // New State for export loading
  const [isExporting, setIsExporting] = useState(false);

  // const ALL_HEADERS = [
  //   "areasOfInterest",
  //   "fullName",
  //   "email",
  //   "cadence",
  //   "currentChallenge",
  //   "roleTitle",
  //   "organization",
  //   "regionOfOperation",
  //   "mentorshipFormat",
  //   "delivery",
  //   "supportNeeded",
  //   "feelingStretched",
  //   "otherArea",
  //   "yearsInLeadership",
  // ];

  // CRITICAL: Updated ALL_HEADERS with 'id', 'type', 'status', 'createdAt'
  const ALL_HEADERS = [
    "id",
    "fullName",
    "email",
    "type", // Added for the CSV file
    "status", // Added for the CSV file
    "createdAt", // Added for the CSV file
    "areasOfInterest",
    "areasOfExpertise",
    "cadence",
    "currentChallenge",
    "roleTitle",
    "organization",
    "regionOfOperation",
    "mentorshipFormat",
    "delivery",
    "supportNeeded",
    "feelingStretched",
    "otherArea",
    "yearsInLeadership",
  ];

  const handleExport = () => {
    if (!applications || applications.length === 0) return;

    setIsExporting(true);

    // Use a small delay to allow the loading state to show up visually
    setTimeout(() => {
      try {
        // 1. Convert the JSON data to CSV string
        const csvData = convertToCSV(applications, ALL_HEADERS);

        // 2. Generate filename
        const timestamp = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const filename = `applications_export_${timestamp}.csv`;

        // 3. Trigger download
        downloadFile(csvData, filename, "text/csv;charset=utf-8;");
      } catch (error) {
        console.error("CSV Export Failed:", error);
        alert("Failed to export data. Check the console for details.");
      } finally {
        setIsExporting(false);
      }
    }, 100);
  };

  // Handle Auth Loading and Unauthorized Access
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span className="text-lg">Checking permissions...</span>
      </div>
    );
  }

  if (!isAdmin) {
    // Should be caught by useAdminAuth, but for component integrity
    return null;
  }

  const renderStatusBadge = (status: Application["status"]) => {
    switch (status) {
      case "approved":
        return (
          <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
            Rejected
          </span>
        );
      case "pending":
      default:
        return (
          <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            Pending
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="container mx-auto">
        {/* <div className="flex justify-between items-center mb-6"> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <Button
            variant="outline"
            className="mb-6"
            onClick={() => navigate("/admin/dashboard")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          {/* Export Button */}
          <Button
            onClick={handleExport}
            disabled={
              dataLoading ||
              isExporting ||
              !applications ||
              applications.length === 0
            }
            className="bg-primary hover:bg-primary/90"
          >
            {isExporting ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileText className="h-4 w-4 mr-2" />
            )}
            Export Applications (CSV)
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {dataLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-lg">Loading applications...</span>
              </div>
            ) : dataError ? (
              <div className="text-red-600 p-4 border border-red-300 rounded-lg">
                **Error fetching applications:** {dataError.message}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications?.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-8 text-muted-foreground"
                        >
                          No applications found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      applications?.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="whitespace-nowrap">
                            {app.createdAt.toLocaleDateString()}
                          </TableCell>
                          <TableCell className="font-medium">
                            {app.fullName}
                          </TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell className="capitalize">
                            {app.type}
                          </TableCell>
                          <TableCell>{renderStatusBadge(app.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                navigate(`/admin/applications/${app.id}`)
                              }
                            >
                              <Eye className="h-4 w-4 mr-1" /> View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminApplications;

// src/pages/ApplicationDetail.tsx

import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

// --- Type Definition for a single Application Document ---
// Must match the type used in AdminApplications.tsx
interface Application {
  id: string; // Document ID
  fullName: string;
  email: string;
  type: "mentor" | "mentee";
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  // Add other detail fields you expect to see on this page
  // phone?: string;
  // bio?: string;
  // skills?: string[];
}

// --- Data Fetching Hook using TanStack Query ---
// const useApplicationDetail = (id: string) => {
//   return useQuery({
//     queryKey: ["application", id],
//     queryFn: async (): Promise<Application> => {
//       const docRef = doc(db, "applications", id);
//       const docSnap = await getDoc(docRef);

//       if (!docSnap.exists()) {
//         throw new Error("Application not found.");
//       }

//       const data = docSnap.data();

//       return {
//         id: docSnap.id,
//         ...data,
//         // Convert Firebase Timestamp to JavaScript Date
//         createdAt: data.createdAt?.toDate
//           ? data.createdAt.toDate()
//           : new Date(data.createdAt),
//       } as Application;
//     },
//     // Only run the query if the ID is available
//     enabled: !!id,
//   });
// };

// --- DATA FETCHING HOOK: UPDATED TO CHECK BOTH COLLECTIONS ---
const useApplicationDetail = (id: string) => {
  return useQuery({
    queryKey: ["application", id],
    queryFn: async (): Promise<Application> => {
      if (!id) throw new Error("Missing application ID.");

      // 1. Check Mentee Applications collection
      const menteeDocRef = doc(db, "menteeApplications", id);
      const menteeDocSnap = await getDoc(menteeDocRef);

      if (menteeDocSnap.exists()) {
        const data = menteeDocSnap.data();
        return {
          id: menteeDocSnap.id,
          ...data,
          type: "mentee", // CRITICAL: Assign type based on collection found
          createdAt: data.createdAt?.toDate
            ? data.createdAt.toDate()
            : new Date(data.createdAt),
        } as Application;
      }

      // 2. Check Mentor Applications collection
      const mentorDocRef = doc(db, "mentorApplications", id);
      const mentorDocSnap = await getDoc(mentorDocRef);

      if (mentorDocSnap.exists()) {
        const data = mentorDocSnap.data();
        return {
          id: mentorDocSnap.id,
          ...data,
          type: "mentor", // CRITICAL: Assign type based on collection found
          createdAt: data.createdAt?.toDate
            ? data.createdAt.toDate()
            : new Date(data.createdAt),
        } as Application;
      }

      // 3. If the document is not found in either, fail
      throw new Error("Application not found.");
    },
    // Only run the query if the ID is available
    enabled: !!id,
  });
};

const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL
  const navigate = useNavigate();
  const { loading: authLoading, isAdmin } = useAdminAuth();

  // Fetch data using the ID
  const {
    data: application,
    isLoading,
    error,
  } = useApplicationDetail(id || "");

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

  // Handle Data Loading and Errors
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-3 text-lg">Loading application details...</span>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="container mx-auto p-8">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate("/admin/applications")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>
        <Card className="border-red-500 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">
              Application Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {error?.message ||
                "The requested application could not be found."}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Helper for status badge display
  const renderStatusBadge = (status: Application["status"]) => {
    let style = "bg-yellow-100 text-yellow-800";
    if (status === "approved") style = "bg-green-100 text-green-800";
    if (status === "rejected") style = "bg-red-100 text-red-800";
    return (
      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${style}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="container mx-auto">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate("/admin/applications")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Applications List
        </Button>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-3xl">
                {application.fullName} - {application.type} Application
              </CardTitle>
              <CardDescription>
                Submitted on: {application.createdAt.toLocaleDateString()} at{" "}
                {application.createdAt.toLocaleTimeString()}
              </CardDescription>
            </div>
            {renderStatusBadge(application.status)}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Email Address
                </p>
                <p className="text-lg">{application.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Phone Number
                </p>
                {/* <p className="text-lg">{application.phone || "N/A"}</p> */}
              </div>
            </div>

            {/* Bio/Summary Section */}
            <div className="space-y-1 border-b pb-4">
              <p className="text-sm font-medium text-muted-foreground">
                Bio / Motivation
              </p>
              <p className="text-base whitespace-pre-wrap">
                {/* {application.bio || "No detailed bio provided."} */}
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Skills / Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {/* {application.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                )) || (
                  <span className="text-muted-foreground">None listed.</span>
                )} */}
              </div>
            </div>

            {/* Simple Action Buttons (Placeholders for future implementation) */}
            <div className="pt-6 flex gap-4">
              {application.status === "pending" && (
                <>
                  <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() =>
                      console.log(
                        "Approve action triggered for:",
                        application.id
                      )
                    }
                    disabled // Disable until actual mutation logic is added
                  >
                    <CheckCircle className="h-4 w-4 mr-2" /> Approve Application
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() =>
                      console.log(
                        "Reject action triggered for:",
                        application.id
                      )
                    }
                    disabled // Disable until actual mutation logic is added
                  >
                    <XCircle className="h-4 w-4 mr-2" /> Reject
                  </Button>
                </>
              )}
              {application.status !== "pending" && (
                <p className="text-sm text-muted-foreground italic">
                  Application is already marked as: {application.status}.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationDetail;

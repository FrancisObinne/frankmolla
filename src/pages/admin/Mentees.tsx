// import { useEffect, useState } from "react";
// import { supabase } from "@/integrations/supabase/client";
// import { useAdminAuth } from "@/hooks/useAdminAuth";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowLeft, Download, Trash2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

// interface Mentee {
//   id: string;
//   full_name: string;
//   email: string;
//   areas_of_interest: string[];
//   created_at: string;
//   role_title: string;
//   organization: string;
// }

// const Mentees = () => {
//   const { loading } = useAdminAuth();
//   const [mentees, setMentees] = useState<Mentee[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   useEffect(() => {
//     if (!loading) {
//       loadMentees();
//     }
//   }, [loading]);

//   const loadMentees = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("mentees")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setMentees(data || []);
//     } catch (error: any) {
//       toast({
//         title: "Error loading mentees",
//         description: error.message,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const { error } = await supabase.from("mentees").delete().eq("id", id);

//       if (error) throw error;

//       toast({
//         title: "Success",
//         description: "Mentee deleted successfully",
//       });

//       loadMentees();
//     } catch (error: any) {
//       toast({
//         title: "Error deleting mentee",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ["Name", "Email", "Role", "Organization", "Areas of Interest", "Registration Date"];
//     const rows = mentees.map(m => [
//       m.full_name,
//       m.email,
//       m.role_title,
//       m.organization,
//       m.areas_of_interest.join("; "),
//       new Date(m.created_at).toLocaleDateString()
//     ]);

//     const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `mentees-${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//   };

//   if (loading || isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-pulse text-lg">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b bg-card">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 Back
//               </Button>
//               <h1 className="text-2xl font-bold">Manage Mentees</h1>
//             </div>
//             <Button onClick={exportToCSV}>
//               <Download className="h-4 w-4 mr-2" />
//               Export CSV
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <Card>
//           <CardHeader>
//             <CardTitle>All Mentees ({mentees.length})</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Email</TableHead>
//                   <TableHead>Role</TableHead>
//                   <TableHead>Organization</TableHead>
//                   <TableHead>Areas of Interest</TableHead>
//                   <TableHead>Registered</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {mentees.map((mentee) => (
//                   <TableRow key={mentee.id}>
//                     <TableCell className="font-medium">{mentee.full_name}</TableCell>
//                     <TableCell>{mentee.email}</TableCell>
//                     <TableCell>{mentee.role_title}</TableCell>
//                     <TableCell>{mentee.organization}</TableCell>
//                     <TableCell>{mentee.areas_of_interest.join(", ")}</TableCell>
//                     <TableCell>{new Date(mentee.created_at).toLocaleDateString()}</TableCell>
//                     <TableCell>
//                       <AlertDialog>
//                         <AlertDialogTrigger asChild>
//                           <Button variant="destructive" size="sm">
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </AlertDialogTrigger>
//                         <AlertDialogContent>
//                           <AlertDialogHeader>
//                             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                             <AlertDialogDescription>
//                               This will permanently delete this mentee's profile. This action cannot be undone.
//                             </AlertDialogDescription>
//                           </AlertDialogHeader>
//                           <AlertDialogFooter>
//                             <AlertDialogCancel>Cancel</AlertDialogCancel>
//                             <AlertDialogAction onClick={() => handleDelete(mentee.id)}>
//                               Delete
//                             </AlertDialogAction>
//                           </AlertDialogFooter>
//                         </AlertDialogContent>
//                       </AlertDialog>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// };

// export default Mentees;

// src/pages/Mentees.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"; // Import TanStack Query hooks
import { db } from "@/firebase/config"; // Firebase Firestore instance
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore"; // Firestore functions
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useToast } from "@/hooks/use-toast";

// UI Components (assuming these paths are correct)
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Lucide Icons
import { ArrowLeft, Download, Trash2, Loader2 } from "lucide-react";

// --- Mentee Data Interface ---
// The field names are adapted to common Firestore/TypeScript conventions (camelCase)
// but match the data you were displaying.
interface Mentee {
  id: string;
  fullName: string;
  email: string;
  areasOfInterest: string[];
  createdAt: Date; // Changed from string to Date
  roleTitle: string;
  organization: string;
  // Add any other fields you store for a Mentee document
}

// --- TanStack Query Data Fetching Hook ---
const fetchMentees = async (): Promise<Mentee[]> => {
  // Assuming the collection name is 'mentees' or similar
  const menteesRef = collection(db, "mentees");

  // Use 'createdAt' for ordering (assuming this is the field name now)
  const q = query(menteesRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      fullName: data.fullName || data.full_name, // Handle potential old/new naming conventions
      email: data.email,
      areasOfInterest: data.areasOfInterest || data.areas_of_interest || [],
      createdAt: data.createdAt?.toDate
        ? data.createdAt.toDate()
        : new Date(data.created_at || data.createdAt),
      roleTitle: data.roleTitle || data.role_title,
      organization: data.organization,
      // ... map other fields
    } as Mentee;
  });
};

export const useMenteesQuery = () => {
  return useQuery({
    queryKey: ["mentees"],
    queryFn: fetchMentees,
    staleTime: 1000 * 60 * 5, // 5 minutes fresh data
  });
};

// --- TanStack Query Deletion Mutation Hook ---
export const useDeleteMenteeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      // Delete the document by ID from the 'mentees' collection
      const docRef = doc(db, "mentees", id);
      await deleteDoc(docRef);
    },
    // Invalidate the 'mentees' query cache to refetch the list after successful deletion
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentees"] });
    },
  });
};

// -------------------------------------------------------------------
// --- Mentees Component ---
// -------------------------------------------------------------------

const Mentees = () => {
  const { loading: authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Replace loadMentees useEffect/useState with TanStack Query
  const {
    data: mentees,
    isLoading: dataLoading,
    error: dataError,
  } = useMenteesQuery();
  const deleteMutation = useDeleteMenteeMutation();

  const [isExporting, setIsExporting] = useState(false); // For export button loading state

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast({
        title: "Success",
        description: "Mentee deleted successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting mentee",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    if (!mentees || mentees.length === 0) return;

    setIsExporting(true);

    const headers = [
      "ID",
      "Full Name",
      "Email",
      "Role",
      "Organization",
      "Areas of Interest",
      "Registration Date",
    ];
    const rows = mentees.map((m) => [
      m.id,
      m.fullName,
      m.email,
      m.roleTitle,
      m.organization,
      m.areasOfInterest.join("; "),
      m.createdAt.toLocaleDateString(),
    ]);

    // Simple CSV conversion logic (adapted from previous version)
    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map(
            (cell) =>
              // Simple escape for CSV: quotes any cell that contains a quote, comma, or newline
              `"${String(cell).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    // Trigger download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mentees-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();

    setIsExporting(false);
  };

  if (authLoading || dataLoading || deleteMutation.isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <span className="text-lg">
          {authLoading ? "Checking permissions..." : "Loading mentees data..."}
        </span>
      </div>
    );
  }

  if (dataError) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-red-600 p-4 border border-red-300 rounded-lg">
          **Error loading mentees:** {dataError.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/admin/dashboard")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Manage Mentees</h1>
            </div>
            <Button
              onClick={exportToCSV}
              disabled={!mentees || mentees.length === 0 || isExporting}
            >
              {isExporting ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Download className="h-4 w-4 mr-2" />
              )}
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>All Mentees ({mentees?.length || 0})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Areas of Interest</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mentees && mentees.length > 0 ? (
                  mentees.map((mentee) => (
                    <TableRow key={mentee.id}>
                      <TableCell className="font-medium">
                        {mentee.fullName}
                      </TableCell>
                      <TableCell>{mentee.email}</TableCell>
                      <TableCell>{mentee.roleTitle}</TableCell>
                      <TableCell>{mentee.organization}</TableCell>
                      <TableCell>{mentee.areasOfInterest.join(", ")}</TableCell>
                      <TableCell>
                        {mentee.createdAt.toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete {mentee.fullName}'s
                                profile. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(mentee.id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No mentees have been registered yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Mentees;

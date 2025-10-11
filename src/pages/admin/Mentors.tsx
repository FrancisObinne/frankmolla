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

// interface Mentor {
//   id: string;
//   full_name: string;
//   email: string;
//   areas_of_interest: string[];
//   created_at: string;
//   role_title: string;
//   organization: string;
// }

// const Mentors = () => {
//   const { loading } = useAdminAuth();
//   const [mentors, setMentors] = useState<Mentor[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   useEffect(() => {
//     if (!loading) {
//       loadMentors();
//     }
//   }, [loading]);

//   const loadMentors = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("mentors")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setMentors(data || []);
//     } catch (error: any) {
//       toast({
//         title: "Error loading mentors",
//         description: error.message,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const { error } = await supabase.from("mentors").delete().eq("id", id);

//       if (error) throw error;

//       toast({
//         title: "Success",
//         description: "Mentor deleted successfully",
//       });

//       loadMentors();
//     } catch (error: any) {
//       toast({
//         title: "Error deleting mentor",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ["Name", "Email", "Role", "Organization", "Areas of Interest", "Registration Date"];
//     const rows = mentors.map(m => [
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
//     a.download = `mentors-${new Date().toISOString().split('T')[0]}.csv`;
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
//               <h1 className="text-2xl font-bold">Manage Mentors</h1>
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
//             <CardTitle>All Mentors ({mentors.length})</CardTitle>
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
//                 {mentors.map((mentor) => (
//                   <TableRow key={mentor.id}>
//                     <TableCell className="font-medium">{mentor.full_name}</TableCell>
//                     <TableCell>{mentor.email}</TableCell>
//                     <TableCell>{mentor.role_title}</TableCell>
//                     <TableCell>{mentor.organization}</TableCell>
//                     <TableCell>{mentor.areas_of_interest.join(", ")}</TableCell>
//                     <TableCell>{new Date(mentor.created_at).toLocaleDateString()}</TableCell>
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
//                               This will permanently delete this mentor's profile. This action cannot be undone.
//                             </AlertDialogDescription>
//                           </AlertDialogHeader>
//                           <AlertDialogFooter>
//                             <AlertDialogCancel>Cancel</AlertDialogCancel>
//                             <AlertDialogAction onClick={() => handleDelete(mentor.id)}>
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

// export default Mentors;

// src/pages/Mentors.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

// UI Components
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

// --- Mentor Data Interface ---
interface Mentor {
  id: string;
  fullName: string; // Changed from full_name
  email: string;
  areasOfInterest: string[]; // Changed from areas_of_interest
  createdAt: Date; // Changed from created_at (string) to Date
  roleTitle: string; // Changed from role_title
  organization: string;
}

// --- TanStack Query Data Fetching Hook ---
const fetchMentors = async (): Promise<Mentor[]> => {
  // Assuming the collection name is 'mentors'
  const mentorsRef = collection(db, "mentors");

  // Fetch all mentors, ordered by creation date (newest first)
  const q = query(mentorsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      // Map potential database field names to the component's interface
      fullName: data.fullName || data.full_name,
      email: data.email,
      areasOfInterest: data.areasOfInterest || data.areas_of_interest || [],
      createdAt: data.createdAt?.toDate
        ? data.createdAt.toDate()
        : new Date(data.created_at || data.createdAt),
      roleTitle: data.roleTitle || data.role_title,
      organization: data.organization,
    } as Mentor;
  });
};

export const useMentorsQuery = () => {
  return useQuery({
    queryKey: ["mentors"],
    queryFn: fetchMentors,
    staleTime: 1000 * 60 * 5, // 5 minutes fresh data
  });
};

// --- TanStack Query Deletion Mutation Hook ---
export const useDeleteMentorMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      // Delete the document by ID from the 'mentors' collection
      const docRef = doc(db, "mentors", id);
      await deleteDoc(docRef);
    },
    // Invalidate the 'mentors' query cache to refetch the list after successful deletion
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
};

// -------------------------------------------------------------------
// --- Mentors Component ---
// -------------------------------------------------------------------

const Mentors = () => {
  const { loading: authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Replace Supabase fetching with TanStack Query
  const {
    data: mentors,
    isLoading: dataLoading,
    error: dataError,
  } = useMentorsQuery();
  const deleteMutation = useDeleteMentorMutation();

  const [isExporting, setIsExporting] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast({
        title: "Success",
        description: "Mentor deleted successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting mentor",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    if (!mentors || mentors.length === 0) return;

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
    const rows = mentors.map((m) => [
      m.id,
      m.fullName,
      m.email,
      m.roleTitle,
      m.organization,
      m.areasOfInterest.join("; "),
      m.createdAt.toLocaleDateString(),
    ]);

    // CSV conversion logic
    const csv = [headers, ...rows]
      .map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    // Trigger download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mentors-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();

    setIsExporting(false);
  };

  if (authLoading || dataLoading || deleteMutation.isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <span className="text-lg">
          {authLoading ? "Checking permissions..." : "Loading mentors data..."}
        </span>
      </div>
    );
  }

  if (dataError) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-red-600 p-4 border border-red-300 rounded-lg">
          **Error loading mentors:** {dataError.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/admin/dashboard")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Manage Mentors</h1>
            </div>
            <Button
              onClick={exportToCSV}
              disabled={!mentors || mentors.length === 0 || isExporting}
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
            <CardTitle>All Mentors ({mentors?.length || 0})</CardTitle>
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
                {mentors && mentors.length > 0 ? (
                  mentors.map((mentor) => (
                    <TableRow key={mentor.id}>
                      <TableCell className="font-medium">
                        {mentor.fullName}
                      </TableCell>
                      <TableCell>{mentor.email}</TableCell>
                      <TableCell>{mentor.roleTitle}</TableCell>
                      <TableCell>{mentor.organization}</TableCell>
                      <TableCell>{mentor.areasOfInterest.join(", ")}</TableCell>
                      <TableCell>
                        {mentor.createdAt.toLocaleDateString()}
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
                                This will permanently delete {mentor.fullName}'s
                                profile. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(mentor.id)}
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
                      No mentors have been registered yet.
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

export default Mentors;

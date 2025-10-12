// // src/pages/ApplicationDetail.tsx

// import { useNavigate, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import { doc, getDoc } from "firebase/firestore";
// import { useAdminAuth } from "@/hooks/useAdminAuth";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Loader2, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

// // --- Type Definition for a single Application Document ---
// // Must match the type used in AdminApplications.tsx
// interface Application {
//   id: string; // Document ID
//   fullName: string;
//   email: string;
//   type: "mentor" | "mentee";
//   status: "pending" | "approved" | "rejected";
//   createdAt: Date;
//   // Add other detail fields you expect to see on this page
//   // phone?: string;
//   // bio?: string;
//   // skills?: string[];
// }

// // --- Data Fetching Hook using TanStack Query ---
// // const useApplicationDetail = (id: string) => {
// //   return useQuery({
// //     queryKey: ["application", id],
// //     queryFn: async (): Promise<Application> => {
// //       const docRef = doc(db, "applications", id);
// //       const docSnap = await getDoc(docRef);

// //       if (!docSnap.exists()) {
// //         throw new Error("Application not found.");
// //       }

// //       const data = docSnap.data();

// //       return {
// //         id: docSnap.id,
// //         ...data,
// //         // Convert Firebase Timestamp to JavaScript Date
// //         createdAt: data.createdAt?.toDate
// //           ? data.createdAt.toDate()
// //           : new Date(data.createdAt),
// //       } as Application;
// //     },
// //     // Only run the query if the ID is available
// //     enabled: !!id,
// //   });
// // };

// // --- DATA FETCHING HOOK: UPDATED TO CHECK BOTH COLLECTIONS ---
// const useApplicationDetail = (id: string) => {
//   return useQuery({
//     queryKey: ["application", id],
//     queryFn: async (): Promise<Application> => {
//       if (!id) throw new Error("Missing application ID.");

//       // 1. Check Mentee Applications collection
//       const menteeDocRef = doc(db, "menteeApplications", id);
//       const menteeDocSnap = await getDoc(menteeDocRef);

//       if (menteeDocSnap.exists()) {
//         const data = menteeDocSnap.data();
//         return {
//           id: menteeDocSnap.id,
//           ...data,
//           type: "mentee", // CRITICAL: Assign type based on collection found
//           createdAt: data.createdAt?.toDate
//             ? data.createdAt.toDate()
//             : new Date(data.createdAt),
//         } as Application;
//       }

//       // 2. Check Mentor Applications collection
//       const mentorDocRef = doc(db, "mentorApplications", id);
//       const mentorDocSnap = await getDoc(mentorDocRef);

//       if (mentorDocSnap.exists()) {
//         const data = mentorDocSnap.data();
//         return {
//           id: mentorDocSnap.id,
//           ...data,
//           type: "mentor", // CRITICAL: Assign type based on collection found
//           createdAt: data.createdAt?.toDate
//             ? data.createdAt.toDate()
//             : new Date(data.createdAt),
//         } as Application;
//       }

//       // 3. If the document is not found in either, fail
//       throw new Error("Application not found.");
//     },
//     // Only run the query if the ID is available
//     enabled: !!id,
//   });
// };

// const ApplicationDetail = () => {
//   const { id } = useParams<{ id: string }>(); // Get ID from URL
//   const navigate = useNavigate();
//   const { loading: authLoading, isAdmin } = useAdminAuth();

//   // Fetch data using the ID
//   const {
//     data: application,
//     isLoading,
//     error,
//   } = useApplicationDetail(id || "");

//   // Handle Auth Loading and Unauthorized Access
//   if (authLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="h-8 w-8 animate-spin mr-2" />
//         <span className="text-lg">Checking permissions...</span>
//       </div>
//     );
//   }

//   if (!isAdmin) {
//     // Should be caught by useAdminAuth, but for component integrity
//     return null;
//   }

//   // Handle Data Loading and Errors
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loader2 className="h-8 w-8 animate-spin text-primary" />
//         <span className="ml-3 text-lg">Loading application details...</span>
//       </div>
//     );
//   }

//   if (error || !application) {
//     return (
//       <div className="container mx-auto p-8">
//         <Button
//           variant="outline"
//           className="mb-6"
//           onClick={() => navigate("/admin/applications")}
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to List
//         </Button>
//         <Card className="border-red-500 bg-red-50">
//           <CardHeader>
//             <CardTitle className="text-2xl text-red-700">
//               Application Error
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>
//               {error?.message ||
//                 "The requested application could not be found."}
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   // Helper for status badge display
//   const renderStatusBadge = (status: Application["status"]) => {
//     let style = "bg-yellow-100 text-yellow-800";
//     if (status === "approved") style = "bg-green-100 text-green-800";
//     if (status === "rejected") style = "bg-red-100 text-red-800";
//     return (
//       <span className={`px-3 py-1 text-sm font-semibold rounded-full ${style}`}>
//         {status.toUpperCase()}
//       </span>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background p-4 sm:p-8">
//       <div className="container mx-auto">
//         <Button
//           variant="outline"
//           className="mb-6"
//           onClick={() => navigate("/admin/applications")}
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to Applications List
//         </Button>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between">
//             <div>
//               <CardTitle className="text-3xl">
//                 {application.fullName} - {application.type} Application
//               </CardTitle>
//               <CardDescription>
//                 Submitted on: {application.createdAt.toLocaleDateString()} at{" "}
//                 {application.createdAt.toLocaleTimeString()}
//               </CardDescription>
//             </div>
//             {renderStatusBadge(application.status)}
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {/* Contact Details Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
//               <div className="space-y-1">
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Email Address
//                 </p>
//                 <p className="text-lg">{application.email}</p>
//               </div>
//               <div className="space-y-1">
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Phone Number
//                 </p>
//                 {/* <p className="text-lg">{application.phone || "N/A"}</p> */}
//               </div>
//             </div>

//             {/* Bio/Summary Section */}
//             <div className="space-y-1 border-b pb-4">
//               <p className="text-sm font-medium text-muted-foreground">
//                 Bio / Motivation
//               </p>
//               <p className="text-base whitespace-pre-wrap">
//                 {/* {application.bio || "No detailed bio provided."} */}
//               </p>
//             </div>

//             {/* Skills Section */}
//             <div className="space-y-1">
//               <p className="text-sm font-medium text-muted-foreground mb-2">
//                 Skills / Areas of Interest
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {/* {application.skills?.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 )) || (
//                   <span className="text-muted-foreground">None listed.</span>
//                 )} */}
//               </div>
//             </div>

//             {/* Simple Action Buttons (Placeholders for future implementation) */}
//             <div className="pt-6 flex gap-4">
//               {application.status === "pending" && (
//                 <>
//                   <Button
//                     className="bg-green-600 hover:bg-green-700"
//                     onClick={() =>
//                       console.log(
//                         "Approve action triggered for:",
//                         application.id
//                       )
//                     }
//                     disabled // Disable until actual mutation logic is added
//                   >
//                     <CheckCircle className="h-4 w-4 mr-2" /> Approve Application
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     onClick={() =>
//                       console.log(
//                         "Reject action triggered for:",
//                         application.id
//                       )
//                     }
//                     disabled // Disable until actual mutation logic is added
//                   >
//                     <XCircle className="h-4 w-4 mr-2" /> Reject
//                   </Button>
//                 </>
//               )}
//               {application.status !== "pending" && (
//                 <p className="text-sm text-muted-foreground italic">
//                   Application is already marked as: {application.status}.
//                 </p>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ApplicationDetail;

// src/pages/ApplicationDetail.tsx

import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useToast } from "@/hooks/use-toast"; // Assuming you have this toast hook
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
interface Application {
  id: string;
  fullName: string; // matches menteeApplications/mentorApplications fields
  email: string;
  type: "mentor" | "mentee"; // CRITICAL field determined in the fetch hook
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  // Use a generic dictionary for other fields that vary between mentor/mentee
  [key: string]: any;
}

// --- Data Fetching Hook: Check Both Collections ---
const useApplicationDetail = (id: string) => {
  return useQuery({
    queryKey: ["application", id],
    queryFn: async (): Promise<Application> => {
      if (!id) throw new Error("Missing application ID.");

      // Function to process the document snapshot
      const processSnapshot = (
        docSnap: any,
        type: "mentee" | "mentor"
      ): Application | null => {
        if (!docSnap.exists()) return null;

        const data = docSnap.data();

        // Helper to safely convert Firestore Timestamp to Date
        const getSafeDate = (field: any): Date => {
          if (field?.toDate) {
            return field.toDate();
          }
          // Attempt to parse if it's a string, otherwise return a fallback Date
          if (typeof field === "string" || typeof field === "number") {
            return new Date(field);
          }
          // Fallback to a safe, guaranteed Date object
          return new Date(0); // Epoch date as a safe default
        };

        // Map data fields, handling snake_case/camelCase
        const commonFields = {
          id: docSnap.id,
          fullName: data.fullName || data.full_name,
          email: data.email,
          type: type,
          status: data.status,
          // createdAt: data.createdAt?.toDate
          //   ? data.createdAt.toDate()
          //   : new Date(data.created_at || data.createdAt),
          // Use the safe conversion helper
          createdAt: getSafeDate(data.createdAt || data.created_at),
        };

        // Return all application data for detail view
        return {
          ...commonFields,
          ...data, // Include all other fields (phone, bio, skills, etc.)
        } as Application;
      };

      // 1. Check Mentee Applications collection
      const menteeDocRef = doc(db, "menteeApplications", id);
      const menteeDocSnap = await getDoc(menteeDocRef);
      const menteeApp = processSnapshot(menteeDocSnap, "mentee");
      if (menteeApp) return menteeApp;

      // 2. Check Mentor Applications collection
      const mentorDocRef = doc(db, "mentorApplications", id);
      const mentorDocSnap = await getDoc(mentorDocRef);
      const mentorApp = processSnapshot(mentorDocSnap, "mentor");
      if (mentorApp) return mentorApp;

      // 3. If the document is not found in either, fail
      throw new Error("Application not found.");
    },
    enabled: !!id,
  });
};

// --- TanStack Query Mutation Hook for Approval/Rejection ---

interface MutationVariables {
  id: string;
  type: "mentor" | "mentee";
  newStatus: "approved" | "rejected";
  applicationData: Application;
}

const useUpdateApplicationStatusMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (vars: MutationVariables) => {
      const applicationCollection =
        vars.type === "mentee" ? "menteeApplications" : "mentorApplications";
      const userCollection = vars.type === "mentee" ? "mentees" : "mentors";

      // 1. Update the application status
      const applicationDocRef = doc(db, applicationCollection, vars.id);
      await updateDoc(applicationDocRef, {
        status: vars.newStatus,
        updatedAt: serverTimestamp(),
      });

      // 2. If approved, create the user profile document
      if (vars.newStatus === "approved") {
        // Prepare the new user profile data
        const profileData = {
          // Use the fields from the original application, removing internal/unnecessary ones
          ...vars.applicationData,
          // id: undefined, // Don't include the old ID field in the data payload
          // type: undefined,
          status: "active", // Set final profile status as 'active'
          createdAt: vars.applicationData.createdAt, // Preserve original timestamp
          approvedAt: serverTimestamp(), // Add approval timestamp
        };

        // Use a function to clean up undefined values before saving to Firestore
        const cleanProfileData = Object.fromEntries(
          Object.entries(profileData).filter(
            ([_, value]) => value !== undefined
          )
        );

        // Use the application ID as the document ID for the new profile
        const userDocRef = doc(db, userCollection, vars.id);
        await setDoc(userDocRef, cleanProfileData);
      }
    },
    onSuccess: (data, vars) => {
      // Invalidate the specific application query to refetch details
      queryClient.invalidateQueries({ queryKey: ["application", vars.id] });
      // Invalidate the user list query to update the dashboard/list
      queryClient.invalidateQueries({
        queryKey: [vars.type === "mentee" ? "mentees" : "mentors"],
      });
      queryClient.invalidateQueries({ queryKey: ["applications"] });

      toast({
        title: "Success",
        description: `Application ${vars.id} ${vars.newStatus} successfully.`,
        variant: vars.newStatus === "approved" ? "default" : "destructive",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update application status: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// -------------------------------------------------------------------
// --- ApplicationDetail Component ---
// -------------------------------------------------------------------

const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { loading: authLoading, isAdmin } = useAdminAuth();
  const { toast } = useToast();

  // Fetch data using the ID
  const {
    data: application,
    isLoading: isAppLoading,
    error,
  } = useApplicationDetail(id || "");

  // Initialize mutation hooks
  const updateStatusMutation = useUpdateApplicationStatusMutation();
  const isMutating = updateStatusMutation.isPending;
  const isLoading = isAppLoading || isMutating;

  // --- Action Handlers ---
  const handleAction = (newStatus: "approved" | "rejected") => {
    if (!application || !id) return;

    updateStatusMutation.mutate({
      id: id,
      type: application.type,
      newStatus: newStatus,
      applicationData: application, // Pass the full data for profile creation
    });
  };

  const handleApprove = () => handleAction("approved");
  const handleReject = () => handleAction("rejected");

  // --- Loading and Error States ---
  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <span className="text-lg">
          {authLoading ? "Checking permissions..." : "Processing request..."}
        </span>
      </div>
    );
  }

  if (!isAdmin) {
    // Redirect or display unauthorized message if not admin
    return null;
  }

  if (error || !application) {
    // ... (rest of the error state remains the same)
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
      <span
        className={`px-3 py-1 text-sm font-semibold rounded-full ${style} capitalize`}
      >
        {status}
      </span>
    );
  };

  // Helper to safely render custom data fields
  const renderDetail = (key: string, label: string) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-lg whitespace-pre-wrap">
        {application[key] ? String(application[key]) : "N/A"}
      </p>
    </div>
  );

  // Helper to safely render list data (assuming skills/interests are arrays)
  const renderListDetail = (key: string, label: string) => {
    const items = Array.isArray(application[key]) ? application[key] : null;
    return (
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground mb-2">
          {label}
        </p>
        <div className="flex flex-wrap gap-2">
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-muted-foreground">None listed.</span>
          )}
        </div>
      </div>
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
                {application.fullName} -{" "}
                {application.type === "mentee" ? "Mentee" : "Mentor"}{" "}
                Application
              </CardTitle>
              <CardDescription>
                {/* Submitted on: {application.createdAt.toLocaleDateString()} at{" "}
                {application.createdAt.toLocaleTimeString()} */}
                {/* Submitted on:
                {application.createdAt instanceof Date
                  ? `${application.createdAt.toLocaleDateString()} at ${application.createdAt.toLocaleTimeString()}`
                  : " Date Unavailable"} */}
              </CardDescription>
            </div>
            {renderStatusBadge(application.status)}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Details Section - Render actual data fields if they exist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
              {renderDetail("email", "Email Address")}
              {/* Assuming the database field for phone is 'phone' */}
              {/* {renderDetail("phone", "Phone Number")} */}
              {/* Assuming the database field for organization is 'organization' */}
              {application.type === "mentor" &&
                renderDetail("organization", "Organization")}
              {/* Assuming the database field for roleTitle is 'roleTitle' */}
              {application.type === "mentor" &&
                renderDetail("roleTitle", "Role Title")}
            </div>

            {/* Bio/Summary Section - Assuming the database field for bio/motivation is 'bio' */}
            {/* <div className="space-y-1 border-b pb-4">
              {renderDetail("bio", "Bio / Motivation")}
            </div> */}

            {/* Skills Section - Assuming the database field is 'areasOfInterest' (or 'skills') */}
            {renderListDetail(
              application.type === "mentor"
                ? "areasOfExpertise"
                : "areasOfInterest",
              `Areas of ${
                application.type === "mentor" ? "Expertise" : "Interest"
              }`
            )}

            {/* Action Buttons: Implement actual logic */}
            <div className="pt-6 flex gap-4">
              {application.status === "pending" && (
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={handleApprove}
                    disabled={isMutating}
                  >
                    {isMutating ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    )}
                    Approve Application
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleReject}
                    disabled={isMutating}
                  >
                    {isMutating ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <XCircle className="h-4 w-4 mr-2" />
                    )}
                    Reject
                  </Button>
                </div>
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

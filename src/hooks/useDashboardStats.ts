// import { useQuery } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import { collection, getDocs, query, where } from "firebase/firestore";

// interface DashboardStats {
//   totalApplications: number;
//   activeApplications: number;
//   recentSignups: number; // Last 7 days
// }

// const fetchDashboardStats = async (): Promise<DashboardStats> => {
//   const applicationsRef = collection(db, "applications");

//   // 1. Get all applications to count the total
//   const totalSnapshot = await getDocs(applicationsRef);
//   const totalApplications = totalSnapshot.size;

//   // 2. Get active applications (assuming an 'active' status field exists)
//   // NOTE: You must have an index for this query in Firebase if you use a where clause.
//   const activeQuery = query(applicationsRef, where("status", "==", "active"));
//   const activeSnapshot = await getDocs(activeQuery);
//   const activeApplications = activeSnapshot.size;

//   // 3. Get recent signups (last 7 days)
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

//   // NOTE: Assuming your application documents have a 'created_at' timestamp field.
//   const recentQuery = query(
//     applicationsRef,
//     where("created_at", ">=", sevenDaysAgo)
//   );
//   const recentSnapshot = await getDocs(recentQuery);
//   const recentSignups = recentSnapshot.size;

//   return {
//     totalApplications,
//     activeApplications,
//     recentSignups,
//   };
// };

// export const useDashboardStats = () => {
//   return useQuery({
//     queryKey: ["dashboardStats"],
//     queryFn: fetchDashboardStats,
//     staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes
//   });
// };

// src/hooks/useDashboardStats.ts (Updated)

import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/config"; // Ensure this path is correct: "@/integrations/firebase/client"
import { collection, getDocs, query, where } from "firebase/firestore";

interface DashboardStats {
  totalApplications: number;
  activeApplications: number;
  activePairings: number;
  recentSignups: number; // Last 7 days
}

const fetchDashboardStats = async (): Promise<DashboardStats> => {
  // Define references for both new collections
  const menteeRef = collection(db, "menteeApplications");
  const mentorRef = collection(db, "mentorApplications");
  const pairingsRef = collection(db, "mentorship_pairings");

  // Get the date 7 days ago for recent signups
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // NOTE: You must ensure 'status' and 'createdAt' fields are indexed as required by Firebase.

  // --- 1. Fetch All Totals (Total Applications) ---
  const [menteeTotalSnapshot, mentorTotalSnapshot] = await Promise.all([
    getDocs(menteeRef),
    getDocs(mentorRef),
  ]);
  const totalApplications = menteeTotalSnapshot.size + mentorTotalSnapshot.size;

  // --- 2. Fetch Active Applications (Active Applications) ---
  const activeMenteeQuery = query(menteeRef, where("status", "==", "approved"));
  const activeMentorQuery = query(mentorRef, where("status", "==", "approved"));

  const [menteeActiveSnapshot, mentorActiveSnapshot] = await Promise.all([
    getDocs(activeMenteeQuery),
    getDocs(activeMentorQuery),
  ]);
  const activeApplications =
    menteeActiveSnapshot.size + mentorActiveSnapshot.size;

  // --- 3. Fetch Active Pairings ---
  // Assuming active pairings have status "active".
  const activePairingsQuery = query(
    pairingsRef
    // where("status", "==", "active")
  );
  const pairingsSnapshot = await getDocs(activePairingsQuery);
  const activePairings = pairingsSnapshot.size; // <-- IMPLEMENTED LOGIC

  // --- 3. Fetch Recent Signups (Last 7 Days) ---
  // NOTE: Assuming your application documents have a 'createdAt' Timestamp field.
  const recentMenteeQuery = query(
    menteeRef,
    where("createdAt", ">=", sevenDaysAgo)
  );
  const recentMentorQuery = query(
    mentorRef,
    where("createdAt", ">=", sevenDaysAgo)
  );

  const [menteeRecentSnapshot, mentorRecentSnapshot] = await Promise.all([
    getDocs(recentMenteeQuery),
    getDocs(recentMentorQuery),
  ]);
  const recentSignups = menteeRecentSnapshot.size + mentorRecentSnapshot.size;

  return {
    totalApplications,
    activeApplications,
    activePairings,
    recentSignups,
  };
};

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboardStats"],
    queryFn: fetchDashboardStats,
    staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes
  });
};

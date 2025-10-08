import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

interface DashboardStats {
  totalApplications: number;
  activeApplications: number;
  recentSignups: number; // Last 7 days
}

const fetchDashboardStats = async (): Promise<DashboardStats> => {
  const applicationsRef = collection(db, "applications");

  // 1. Get all applications to count the total
  const totalSnapshot = await getDocs(applicationsRef);
  const totalApplications = totalSnapshot.size;

  // 2. Get active applications (assuming an 'active' status field exists)
  // NOTE: You must have an index for this query in Firebase if you use a where clause.
  const activeQuery = query(applicationsRef, where("status", "==", "active"));
  const activeSnapshot = await getDocs(activeQuery);
  const activeApplications = activeSnapshot.size;

  // 3. Get recent signups (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // NOTE: Assuming your application documents have a 'created_at' timestamp field.
  const recentQuery = query(
    applicationsRef,
    where("created_at", ">=", sevenDaysAgo)
  );
  const recentSnapshot = await getDocs(recentQuery);
  const recentSignups = recentSnapshot.size;

  return {
    totalApplications,
    activeApplications,
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

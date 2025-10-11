// src/pages/Dashboard.tsx

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useDashboardStats } from "@/hooks/useDashboardStats"; // New hook
// --- Firebase Imports ---
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
// --- End Firebase Imports ---
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, UserPlus, Activity, Briefcase } from "lucide-react"; // Changed UserCheck to Briefcase for better fit
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { loading: authLoading } = useAdminAuth();
  // --- TanStack Query Implementation ---
  const {
    data: stats,
    isLoading: statsLoading,
    error: statsError,
    refetch,
  } = useDashboardStats();
  // --- End TanStack Query Implementation ---

  const navigate = useNavigate(); // This useEffect now just triggers the refetch when auth loading is done. // TanStack Query handles the initial fetch automatically. // useEffect(() => { //  if (!authLoading) { //   refetch(); // TanStack Query handles initial fetch, but good for explicit refresh //  } // }, [authLoading, refetch]);

  // Handle data refetch on component load completion, just in case
  const handleLogout = async () => {
    await signOut(auth); // Firebase signOut
    navigate("/admin/login");
  };

  if (authLoading || statsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading Dashboard...</div>
      </div>
    );
  }

  if (statsError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">
          Error loading stats: {statsError.message}
        </div>
      </div>
    );
  }

  // Fallback for null stats (shouldn't happen with TanStack Query but for type safety)
  const currentStats = stats || {
    totalApplications: 0,
    activeApplications: 0,
    recentSignups: 0,
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Card 1: Total Applications (Replacing Total Mentors) */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applications
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {currentStats.totalApplications}
              </div>

              <p className="text-xs text-muted-foreground">
                All received applications
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Active Applications (Replacing Total Mentees) */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Applications
              </CardTitle>

              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {currentStats.activeApplications}
              </div>

              <p className="text-xs text-muted-foreground">
                Currently active/approved
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Active Pairings (Kept as is - assumes another collection or field) */}
          {/* NOTE: This stat is kept as-is, assuming 'mentorship_pairings' is a separate collection,
                     but if that too needs migration, you'll need its Firebase structure. */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Pairings
              </CardTitle>

              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {/* FIX: Use a dedicated 'pairings' stat here */}0
              </div>

              <p className="text-xs text-muted-foreground">Current matches</p>
            </CardContent>
          </Card>

          {/* Card 4: Recent Sign-ups (From 'applications' collection) */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Recent Sign-ups
              </CardTitle>

              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {currentStats.recentSignups}
              </div>

              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/admin/applications")} // Renamed route to /applications
          >
            <CardHeader>
              <CardTitle>Manage Applications</CardTitle>

              <CardDescription>
                View and manage all incoming applications
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/admin/mentees")}
          >
            <CardHeader>
              <CardTitle>Manage Mentees</CardTitle>
              <CardDescription>
                View, edit, and manage mentee profiles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/admin/mentors")}
          >
            <CardHeader>
              <CardTitle>Manage Mentors</CardTitle>
              <CardDescription>
                View, edit, and manage mentor profiles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/admin/pairings")}
          >
            <CardHeader>
              <CardTitle>Manage Pairings</CardTitle>
              <CardDescription>
                Create and track mentorship matches
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

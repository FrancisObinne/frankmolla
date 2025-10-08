import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface Pairing {
  id: string;
  status: string;
  notes: string | null;
  created_at: string;
  mentor_id: string;
  mentee_id: string;
}

interface Mentor {
  id: string;
  full_name: string;
}

interface Mentee {
  id: string;
  full_name: string;
}

const Pairings = () => {
  const { loading, user } = useAdminAuth();
  const [pairings, setPairings] = useState<Pairing[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPairing, setNewPairing] = useState({
    mentor_id: "",
    mentee_id: "",
    status: "pending",
    notes: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading) {
      loadData();
    }
  }, [loading]);

  const loadData = async () => {
    try {
      const [pairingsRes, mentorsRes, menteesRes] = await Promise.all([
        supabase.from("mentorship_pairings").select("*").order("created_at", { ascending: false }),
        supabase.from("mentors").select("id, full_name"),
        supabase.from("mentees").select("id, full_name"),
      ]);

      if (pairingsRes.error) throw pairingsRes.error;
      if (mentorsRes.error) throw mentorsRes.error;
      if (menteesRes.error) throw menteesRes.error;

      setPairings(pairingsRes.data || []);
      setMentors(mentorsRes.data || []);
      setMentees(menteesRes.data || []);
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePairing = async () => {
    if (!newPairing.mentor_id || !newPairing.mentee_id) {
      toast({
        title: "Error",
        description: "Please select both mentor and mentee",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("mentorship_pairings").insert({
        mentor_id: newPairing.mentor_id,
        mentee_id: newPairing.mentee_id,
        status: newPairing.status,
        notes: newPairing.notes || null,
        created_by: user?.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Pairing created successfully",
      });

      setIsDialogOpen(false);
      setNewPairing({ mentor_id: "", mentee_id: "", status: "pending", notes: "" });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error creating pairing",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("mentorship_pairings").delete().eq("id", id);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Pairing deleted successfully",
      });
      
      loadData();
    } catch (error: any) {
      toast({
        title: "Error deleting pairing",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getMentorName = (mentorId: string) => {
    return mentors.find(m => m.id === mentorId)?.full_name || "Unknown";
  };

  const getMenteeName = (menteeId: string) => {
    return mentees.find(m => m.id === menteeId)?.full_name || "Unknown";
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      active: "bg-green-100 text-green-800",
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Manage Pairings</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Pairing
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Pairing</DialogTitle>
                  <DialogDescription>Match a mentor with a mentee</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Mentor</Label>
                    <Select value={newPairing.mentor_id} onValueChange={(value) => setNewPairing({ ...newPairing, mentor_id: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mentor" />
                      </SelectTrigger>
                      <SelectContent>
                        {mentors.map((mentor) => (
                          <SelectItem key={mentor.id} value={mentor.id}>
                            {mentor.full_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Mentee</Label>
                    <Select value={newPairing.mentee_id} onValueChange={(value) => setNewPairing({ ...newPairing, mentee_id: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mentee" />
                      </SelectTrigger>
                      <SelectContent>
                        {mentees.map((mentee) => (
                          <SelectItem key={mentee.id} value={mentee.id}>
                            {mentee.full_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select value={newPairing.status} onValueChange={(value) => setNewPairing({ ...newPairing, status: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Notes (Optional)</Label>
                    <Textarea
                      value={newPairing.notes}
                      onChange={(e) => setNewPairing({ ...newPairing, notes: e.target.value })}
                      placeholder="Add notes about this pairing..."
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreatePairing}>Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>All Pairings ({pairings.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mentor</TableHead>
                  <TableHead>Mentee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pairings.map((pairing) => (
                  <TableRow key={pairing.id}>
                    <TableCell className="font-medium">{getMentorName(pairing.mentor_id)}</TableCell>
                    <TableCell>{getMenteeName(pairing.mentee_id)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(pairing.status)}`}>
                        {pairing.status}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{pairing.notes || "-"}</TableCell>
                    <TableCell>{new Date(pairing.created_at).toLocaleDateString()}</TableCell>
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
                              This will permanently delete this pairing. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(pairing.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Pairings;

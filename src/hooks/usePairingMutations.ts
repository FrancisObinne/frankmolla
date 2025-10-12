// src/hooks/usePairingMutations.ts (New file)

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

interface NewPairingData {
  mentorId: string;
  menteeId: string;
  startDate: Date; // The intended start date
  status: "pending"; // Always starts as pending
  // Add other necessary fields (e.g., goals, initial notes)
}

interface UpdatePairingData {
  id: string; // The Pairing Document ID
  status?: "pending" | "active" | "completed" | "cancelled";
  notes?: string;
  endDate?: Date;
  // ... other fields that can be edited
}

const createPairing = async (data: NewPairingData) => {
  const pairingRef = collection(db, "mentorship_pairings");

  await addDoc(pairingRef, {
    ...data,
    status: "pending", // Enforce initial status
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const useCreatePairingMutation = () => {
  const queryClient = useQueryClient();
  // Assume you use a useToast() hook for user feedback
  // const { toast } = useToast();

  return useMutation({
    mutationFn: createPairing,
    onSuccess: () => {
      // Invalidate the dashboard stats and pairings list to show the new pairing
      queryClient.invalidateQueries({ queryKey: ["dashboardStats"] });
      queryClient.invalidateQueries({ queryKey: ["pairings"] }); // Assuming a pairings list query
      // toast({ title: "Success", description: "Mentorship pairing created." });
    },
    // ... onError handling
  });
};

const updatePairing = async (data: UpdatePairingData) => {
  if (!data.id) throw new Error("Pairing ID is required for update.");

  const pairingDocRef = doc(db, "mentorship_pairings", data.id);

  // Filter out the ID before sending the data
  const { id, ...updateFields } = data;

  await updateDoc(pairingDocRef, {
    ...updateFields,
    updatedAt: serverTimestamp(),
  });
};

export const useUpdatePairingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePairing,
    onSuccess: (data, variables) => {
      // Invalidate the dashboard stats and the specific pairing detail
      queryClient.invalidateQueries({ queryKey: ["dashboardStats"] });
      queryClient.invalidateQueries({ queryKey: ["pairings"] });
      queryClient.invalidateQueries({ queryKey: ["pairing", variables.id] }); // Assuming a detail view
      // toast for success...
    },
    // ... onError handling
  });
};

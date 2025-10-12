// import { useQuery } from "@tanstack/react-query";
// import { db } from "@/firebase/config"; // Ensure this path is correct: "@/integrations/firebase/client"
// import { collection, getDocs, query, where } from "firebase/firestore";

// // src/hooks/usePairings.ts

// // Example: Fetch all active pairings
// const fetchPairings = async (status: string) => {
//   const pairingsRef = collection(db, "mentorship_pairings");
//   let q = pairingsRef;

//   if (status !== "all") {
//     q = query(pairingsRef, where("status", "==", status));
//   }

//   const snapshot = await getDocs(q);
//   // ... map and process documents to return an array of Pairing objects
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// export const usePairings = (statusFilter: string) => {
//   return useQuery({
//     queryKey: ["pairings", statusFilter],
//     queryFn: () => fetchPairings(statusFilter),
//   });
// };

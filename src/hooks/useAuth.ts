import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { auth } from "../firebase/config";

const AUTH_QUERY_KEY = "authUser";

// Hook to fetch and maintain user state
export const useAuth = () => {
  const queryClient = useQueryClient();

  // We use a query for global state management
  const { data: user, isLoading } = useQuery<User | null, Error>({
    queryKey: [AUTH_QUERY_KEY],
    // Initial queryFn can be simple, the listener below handles real-time updates
    queryFn: () => new Promise((resolve) => resolve(auth.currentUser)),
    staleTime: Infinity, // The listener manages freshness
    // cacheTime: Infinity,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      // Update the TanStack Query cache whenever the auth state changes
      queryClient.setQueryData([AUTH_QUERY_KEY], firebaseUser);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [queryClient]);

  return { user, isLoading };
};

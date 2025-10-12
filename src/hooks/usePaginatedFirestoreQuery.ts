// // src/hooks/usePaginatedFirestoreQuery.ts

// import {
//   useQuery,
//   useQueryClient,
//   UseQueryResult,
// } from "@tanstack/react-query";
// import { db } from "@/firebase/config";
// import {
//   collection,
//   query,
//   limit,
//   orderBy,
//   startAfter,
//   getDocs,
//   QueryDocumentSnapshot,
//   where,
//   QueryConstraint,
// } from "firebase/firestore";

// // Interface for the data returned by the hook
// interface PaginatedData<T> {
//   data: T[];
//   hasNextPage: boolean;
//   hasPreviousPage: boolean;
//   totalPages: number;
// }

// // Interface for the pagination state
// interface PaginationState {
//   page: number;
//   pageSize: number;
//   // A cursor to tell Firestore where to start the next page
//   startAfterCursor?: QueryDocumentSnapshot<any> | null;
// }

// // The generic fetch function
// const fetchPage = async <T>(
//   collectionName: string,
//   state: PaginationState,
//   orderByField: string,
//   queryConstraints: QueryConstraint[] = [] // Optional filtering/where clauses
// ): Promise<{ items: T[]; lastDoc: QueryDocumentSnapshot<any> | null }> => {
//   // Always fetch one more document than the page size to check for the next page
//   const fetchLimit = state.pageSize + 1;

//   let q = query(
//     collection(db, collectionName),
//     ...queryConstraints, // Apply filters (e.g., status == 'pending')
//     orderBy(orderByField, "desc"), // Always sort by the field used for the cursor
//     limit(fetchLimit)
//   );

//   // Apply cursor logic for navigating past the first page
//   if (state.startAfterCursor) {
//     q = query(q, startAfter(state.startAfterCursor));
//   }

//   const snapshot = await getDocs(q);

//   const items: T[] = snapshot.docs.slice(0, state.pageSize).map(
//     (doc) =>
//       ({
//         id: doc.id,
//         ...doc.data(),
//         // Convert Firestore Timestamp to JS Date if necessary
//         createdAt: doc.data().createdAt?.toDate
//           ? doc.data().createdAt.toDate()
//           : doc.data().createdAt,
//       } as T)
//   );

//   const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;

//   return {
//     items,
//     // Return the last document only if we fetched a full set (plus one)
//     lastDoc:
//       snapshot.docs.length === fetchLimit
//         ? snapshot.docs[state.pageSize - 1]
//         : null,
//   };
// };

// /**
//  * Reusable hook for Firestore pagination with TanStack Query.
//  * @param queryKey The base query key (e.g., ['applications'])
//  * @param collectionName The name of the Firestore collection (e.g., 'menteeApplications')
//  * @param state The current pagination state
//  * @param orderByField The field to order results by (mandatory for cursor-based pagination)
//  * @param queryConstraints Optional Firebase where() clauses for filtering
//  */
// export const usePaginatedFirestoreQuery = <T>(
//   queryKey: (string | number | object)[],
//   collectionName: string,
//   state: PaginationState,
//   orderByField: string = "createdAt", // Default to 'createdAt'
//   queryConstraints: QueryConstraint[] = []
// ): UseQueryResult<PaginatedData<T>, Error> & {
//   setCursor: (cursor: QueryDocumentSnapshot<any> | null) => void;
// } => {
//   const currentCursorKey = `cursor-${state.page}`;

//   // We need a local state management mechanism for the cursors between pages.
//   // We'll use TanStack Query's cache to store cursors for previous pages.
//   const queryClient = useQueryClient();

//   // The full query key includes all dependencies
//   const fullQueryKey = [
//     ...queryKey,
//     state.page,
//     state.pageSize,
//     orderByField,
//     ...queryConstraints,
//   ];

//   // Helper function to set the cursor for a page
//   const setCursor = (cursor: QueryDocumentSnapshot<any> | null) => {
//     queryClient.setQueryData([...queryKey, currentCursorKey], cursor);
//   };

//   // Retrieve the cursor for the current page from the cache
//   const startAfterCursor =
//     queryClient.getQueryData<QueryDocumentSnapshot<any> | null>([
//       ...queryKey,
//       `cursor-${state.page - 1}`,
//     ]);

//   const queryResult = useQuery<PaginatedData<T>, Error>({
//     queryKey: fullQueryKey,
//     queryFn: async () => {
//       // Fetch the data for the current page
//       const { items, lastDoc } = await fetchPage<T>(
//         collectionName,
//         { ...state, startAfterCursor },
//         orderByField,
//         queryConstraints
//       );

//       // Store the cursor for the next page (page + 1)
//       if (lastDoc) {
//         queryClient.setQueryData(
//           [...queryKey, `cursor-${state.page}`],
//           lastDoc
//         );
//       }

//       return {
//         data: items,
//         // We have a next page if we fetched more than the page size
//         hasNextPage: !!lastDoc,
//         hasPreviousPage: state.page > 0, // Assuming page starts at 0 or 1
//         // Total pages calculation is complex without an aggregation query,
//         // so we return a placeholder or rely on hasNextPage/hasPreviousPage
//         totalPages: -1,
//       };
//     },
//     // Only fetch if the page number is non-negative
//     enabled: state.page >= 0,
//     staleTime: 1000 * 60, // 1 minute stale time
//     keepPreviousData: true, // Keep old data visible during fetch of new page,
//   });

//   return { ...queryResult, setCursor };
// };

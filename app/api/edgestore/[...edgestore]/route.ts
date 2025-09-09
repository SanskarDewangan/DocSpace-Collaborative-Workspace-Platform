import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';

// Initialize EdgeStore instance
const es = initEdgeStore.create();

/**
 * This is the main router for the EdgeStore buckets.
 */
// Main router for public files bucket
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

// Export Next.js App Router handler
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export { handler as GET, handler as POST };

/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
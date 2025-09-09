"use client";

import { useQuery } from "convex/react";
import { use, useMemo } from "react";

import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

type PreviewPageProps = {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
};

const PreviewPage = ({ params }: PreviewPageProps) => {
  const { documentId } = use(params);
  const doc = useQuery(api.documents.getById, { documentId });

  const ReadOnlyEditor = useMemo(
    () => dynamicImport(() => import("@/components/readonly-editor"), { ssr: false }),
    []
  );

  if (doc === undefined)
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:mac-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );

  if (doc === null || !doc.isPublished) return <p>Not found.</p>;

  return (
    <div className="pb-40">
      <Cover preview url={doc.coverImage} />
      <div className="md:max-w-3xl lg:max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">{doc.title}</h1>
        <ReadOnlyEditor key={doc.content ?? ""} initialContent={doc.content} />
      </div>
    </div>
  );
};

export default PreviewPage;


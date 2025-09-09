"use client";

import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";

export const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const uploadSelected = async () => {
    if (!file) return;
    setIsSubmitting(true);
    const res = await edgestore.publicFiles.upload({
      file,
      options: { replaceTargetUrl: coverImage.url },
    });
    await update({
      id: params.documentId as Id<"documents">,
      coverImage: res.url,
    });
    onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Cover Image</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <input
            type="file"
            accept="image/*"
            disabled={isSubmitting}
            onChange={(e) => setFile(e.target.files?.[0] || undefined)}
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button onClick={uploadSelected} disabled={!file || isSubmitting}>
              {isSubmitting ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
// Removed duplicate legacy implementation block to fix redeclarations.

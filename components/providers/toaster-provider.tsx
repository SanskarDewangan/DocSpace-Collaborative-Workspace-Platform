"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

import { Spinner } from "../spinner";

export const ToasterProvider = () => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Toaster
      position="bottom-center"
      theme={theme}
      richColors
    />
  );
};

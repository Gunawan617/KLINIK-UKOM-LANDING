"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAnalytics } from "@/app/context/AnalyticsContext";

export default function PageViewTracker() {
  const { trackPageView } = useAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, trackPageView]);

  return null;
}

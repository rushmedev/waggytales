"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

function isLocalHostname(hostname: string) {
  const normalizedHost = hostname.toLowerCase();
  return LOCAL_HOSTNAMES.has(normalizedHost) || normalizedHost.endsWith(".local");
}

type GoogleAnalyticsSafeProps = {
  gaId: string;
};

export default function GoogleAnalyticsSafe({ gaId }: GoogleAnalyticsSafeProps) {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    setShouldLoadAnalytics(!isLocalHostname(host));
  }, []);

  if (!shouldLoadAnalytics) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}

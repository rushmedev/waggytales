"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
};

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

function shouldTrackForHostname(hostname: string) {
  const normalizedHost = hostname.toLowerCase();
  return !LOCAL_HOSTNAMES.has(normalizedHost) && !normalizedHost.endsWith(".local");
}

function sendTrackEvent(
  eventName: string,
  eventParams: Record<string, string | number | boolean>
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...anchorProps
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (shouldTrackForHostname(window.location.hostname)) {
      sendTrackEvent(eventName, eventParams ?? {});
    }
    onClick?.(event);
  };

  return <a {...anchorProps} onClick={handleClick} />;
}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParams: Record<string, string | number | boolean>
    ) => void;
  }
}

"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
};

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...anchorProps
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    sendGAEvent("event", eventName, eventParams ?? {});
    onClick?.(event);
  };

  return <a {...anchorProps} onClick={handleClick} />;
}

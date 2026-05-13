"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  HeartHandshake,
  House,
  Info,
  Menu,
  MessageSquareQuote,
  Phone,
  X,
} from "lucide-react";
import type { NavItem } from "../config/navigation";

type MobileNavAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type MobileNavMenuProps = {
  items: NavItem[];
  serviceItems?: NavItem[];
  actions?: MobileNavAction[];
  label?: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function iconForItem(href: string) {
  if (href === "/") return House;
  if (href.includes("services")) return BriefcaseBusiness;
  if (href.includes("founders")) return HeartHandshake;
  if (href.includes("about")) return Info;
  if (href.includes("testimonials")) return MessageSquareQuote;
  if (href.includes("faqs")) return CircleHelp;
  if (href.includes("contact")) return Phone;
  return House;
}

function renderNavLink(href: string, className: string, label: string, onClick: () => void) {
  if (isExternalHref(href) || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function MobileNavMenu({
  items,
  serviceItems = [],
  actions = [],
  label = "Open navigation menu",
}: MobileNavMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasServiceSubmenu = serviceItems.length > 0;
  const shouldOpenServicesByDefault = useMemo(
    () => pathname.startsWith("/services"),
    [pathname]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) return;

      if (rootRef.current && !rootRef.current.contains(targetNode)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div className="wt-mobile-menu" ref={rootRef}>
      <button
        type="button"
        className="wt-mobile-menu-toggle"
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => {
          if (!isOpen) {
            setIsServicesOpen(shouldOpenServicesByDefault);
          }
          setIsOpen((prev) => !prev);
        }}
      >
        {isOpen ? <X className="wt-icon wt-icon-inline" /> : <Menu className="wt-icon wt-icon-inline" />}
      </button>

      <button
        type="button"
        className={`wt-mobile-menu-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
      />

      <div id={panelId} className={`wt-mobile-menu-panel ${isOpen ? "is-open" : ""}`}>
        <ul className="wt-mobile-menu-list">
          {items.map((item) => {
            const ItemIcon = iconForItem(item.href);
            const isServicesRoot = item.href === "/services" && hasServiceSubmenu;

            if (isServicesRoot) {
              return (
                <li
                  key={`${item.label}-${item.href}`}
                  className={`wt-mobile-menu-services ${isServicesOpen ? "is-open" : ""}`}
                >
                  <div className={`wt-mobile-menu-main-row ${isServicesOpen ? "is-open" : ""}`}>
                    {!isServicesOpen
                      ? renderNavLink(item.href, "wt-mobile-menu-link", item.label, closeMenu)
                      : null}
                    <button
                      type="button"
                      className="wt-mobile-menu-services-toggle"
                      aria-label={isServicesOpen ? "Collapse services list" : "Expand services list"}
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                    >
                      <ChevronDown className={`wt-mobile-menu-chevron ${isServicesOpen ? "is-open" : ""}`} />
                    </button>
                  </div>
                  <div className={`wt-mobile-menu-submenu ${isServicesOpen ? "is-open" : ""}`}>
                    <ul>
                      {serviceItems.map((serviceItem) => (
                        <li key={`${serviceItem.label}-${serviceItem.href}`}>
                          <Link href={serviceItem.href} className="wt-mobile-submenu-link" onClick={closeMenu}>
                            {serviceItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={`${item.label}-${item.href}`}>
                {renderNavLink(item.href, "wt-mobile-menu-link", item.label, closeMenu)}
                <ItemIcon className="wt-mobile-menu-link-icon" />
              </li>
            );
          })}
        </ul>

        {actions.length > 0 ? (
          <div className="wt-mobile-menu-actions">
            {actions.map((action) => (
              <div key={`${action.label}-${action.href}`}>
                {renderNavLink(
                  action.href,
                  `wt-btn ${action.variant === "secondary" ? "wt-btn-secondary" : "wt-btn-primary"}`,
                  action.label,
                  closeMenu
                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

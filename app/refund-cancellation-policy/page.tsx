import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import MobileNavMenu from "../components/mobile-nav-menu";
import ScrollProgress from "../components/scroll-progress";
import { mobileMenuItems, serviceSubmenuItems } from "../config/navigation";
import { siteTheme } from "../config/theme";

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | ${siteTheme.brand.name}`,
  description:
    "Read the official refund and cancellation policy of M & M Waggy Tales for boarding, grooming, training, events, and related services.",
};

async function getPolicyMarkdown() {
  const policyPath = path.join(process.cwd(), "app", "content", "refund-cancellation-policy.md");
  return fs.readFile(policyPath, "utf8");
}

export default async function RefundCancellationPolicyPage() {
  const markdown = await getPolicyMarkdown();

  return (
    <div className="min-h-screen bg-[#fbf6f1] pb-12">
      <ScrollProgress />

      <header className="wt-shell wt-inner-nav-wrap">
        <nav className="wt-inner-nav">
          <Link href="/" className="wt-inner-nav-brand">
            <Image
              src="/waggy.jpg"
              alt={`${siteTheme.brand.name} logo`}
              width={40}
              height={40}
              className="wt-brand-logo"
              preload
            />
            <span>{siteTheme.brand.name}</span>
          </Link>
          <div className="wt-inner-nav-actions wt-inner-nav-actions-desktop">
            <Link className="wt-btn wt-btn-secondary" href="/services">
              All Services
            </Link>
            <Link className="wt-btn wt-btn-primary" href="/">
              Home
            </Link>
          </div>
          <MobileNavMenu items={mobileMenuItems} serviceItems={serviceSubmenuItems} />
        </nav>
      </header>

      <main className="px-4 pb-8 pt-6">
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[#f2dfcf] bg-white p-5 shadow-[0_14px_36px_rgba(24,24,27,0.06)] md:p-8">
          <article className="prose prose-slate max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="font-[var(--font-plus-jakarta-sans)] text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-8 font-[var(--font-plus-jakarta-sans)] text-2xl font-extrabold text-[#1f2937] md:text-3xl">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 font-[var(--font-plus-jakarta-sans)] text-xl font-bold text-[#1f2937]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => <p className="mt-3 text-base leading-8 text-[#4b5563]">{children}</p>,
                ul: ({ children }) => <ul className="mt-3 list-disc space-y-2 pl-6 text-[#4b5563]">{children}</ul>,
                li: ({ children }) => <li className="text-base leading-7">{children}</li>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="font-semibold text-[#f16b34] underline underline-offset-4"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => <strong className="font-bold text-[#1f2937]">{children}</strong>,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </div>
  );
}

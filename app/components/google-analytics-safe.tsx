import Script from "next/script";

type GoogleAnalyticsSafeProps = {
  gaId: string;
};

export default function GoogleAnalyticsSafe({ gaId }: GoogleAnalyticsSafeProps) {
  const localHosts = JSON.stringify(["localhost", "127.0.0.1", "::1"]);
  return (
    <Script id="ga-safe-loader" strategy="afterInteractive">
      {`
        (function () {
          var gaId = ${JSON.stringify(gaId)};
          var host = (window.location.hostname || "").toLowerCase();
          var localHosts = ${localHosts};

          if (localHosts.includes(host) || host.endsWith(".local")) {
            return;
          }

          var gaScript = document.createElement("script");
          gaScript.async = true;
          gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + gaId;
          document.head.appendChild(gaScript);

          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag("js", new Date());
          gtag("config", gaId);
        })();
      `}
    </Script>
  );
}

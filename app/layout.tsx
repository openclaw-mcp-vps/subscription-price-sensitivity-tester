import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceSense – Test Subscription Prices Without Losing Customers",
  description:
    "A/B test pricing with new signups while protecting existing customers. Measure price elasticity and revenue impact with real analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="bd5fa053-418e-4367-9eb5-da20102f8b1b"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

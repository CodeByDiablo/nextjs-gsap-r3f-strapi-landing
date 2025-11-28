import type { Metadata } from "next";
import StyledComponentsRegistry from "./styled-registry";
import { GlobalStyle } from "@/styles/globalStyles";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Senior & Junior",
  description: "Not just a batch a family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <SmoothScroll>{children}</SmoothScroll>
        </StyledComponentsRegistry>
        {/* UX4G Widget */}
        <script src="https://cdn.ux4g.gov.in/tools/accessibility-widget.js" async></script>
      </body>
    </html>
  );
}

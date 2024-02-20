"use client";
import GlobalStyle from "@/styles/globals";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" >
      <body>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

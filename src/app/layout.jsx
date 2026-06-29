import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata = {
  title: "Karang Bongkot Admin",
  description: "Dashboard Admin Desa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CustomThemeProvider } from "@/theme/CustomThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Atlanta Cheap Tree Cutting",
  description: "Atlanta Cheap Tree Cutting",
};

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </html> 
      </CustomThemeProvider>
    </AppRouterCacheProvider>
  );
}

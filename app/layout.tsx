import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider  from "./StoreProvider";  
import LaunchParams from "./components/UrRLSearchParams";
const inter = Inter({ subsets: ["latin"] });

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en">
      <head>
      <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
    />
       </head>
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
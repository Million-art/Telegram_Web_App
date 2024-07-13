import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";
import { boolean } from "@tma.js/sdk";


 
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
      <body >
        <StoreProvider>
        <Suspense fallback={<Loader />}> 

          {children}
          </Suspense>
        </StoreProvider>
        <Toaster position="top-center" reverseOrder={false} />

      </body>
    </html>
  );
}
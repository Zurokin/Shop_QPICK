"use client";

import Navbar from "@/components/navbar";
import "./index.css";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "./store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="bg-[#eaeaea]">
          <Provider store={store}>
            <div className="max-w-[1110px] mx-auto min-h-screen flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}

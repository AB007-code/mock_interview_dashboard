import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/sign-in");
  }
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" height={32} width={38} />
          <h2 className="text-primary-100">Mock Wiser</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
// This is the root layout for the application, which wraps all pages and components.
// It can be used to define global styles, metadata, and other common elements that should be present across the entire application.
// The `children` prop allows you to render the content of the current page within this layout.

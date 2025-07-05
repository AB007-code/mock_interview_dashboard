import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default RootLayout;
// This is the root layout for the application, which wraps all pages and components.
// It can be used to define global styles, metadata, and other common elements that should be present across the entire application.
// The `children` prop allows you to render the content of the current page within this layout.

import * as React from "react";
import { Header } from "./Header";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

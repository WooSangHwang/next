import { ReactNode } from "react";
import Searchbar from "@/componets/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}

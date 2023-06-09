
"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>;

}

export default Providers

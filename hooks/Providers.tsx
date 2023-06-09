"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;

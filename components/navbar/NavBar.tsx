"use client";

import { AirVent, GithubIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <AirVent className="w-6 h-6" />
          <span className="hidden font-bold sm:inline-block">Snapspace</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Search Image
          </Link>
          <Link
            href="/generator"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/generator")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            AI Generator
          </Link>
          <Link
            href="/variant"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/variant")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            AI Variant
          </Link>
        </nav>

        <div>
          <Link
            href={"https://github.com/immark7"}
            target="_blank"
            className={cn(buttonVariants({ size: "sm", variant: "ghost" }))}
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;

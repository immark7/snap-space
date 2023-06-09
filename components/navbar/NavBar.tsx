import { AirVent, GithubIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-3">
          <AirVent className="w-6 h-6" />
          <h2 className="font-bold">Snapspace</h2>
        </div>

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

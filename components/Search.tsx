"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAppStore } from "@/store/useAppStore";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { setSearchQuery } = useAppStore();


  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchQuery(searchText)
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-sm items-center space-x-2 mx-auto mb-12 mt-6"
    >
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search image"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

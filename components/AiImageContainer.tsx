"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageItem from "./image/ImageItem";
import ListSkeleton from "./image/ListSkeleton";
import { fetchPosts } from "@/lib/api";

const AiImageContainer = () => {
  const {
    data: allPosts = [],
    isLoading,
    isError,
  } = useQuery(["allPosts"], fetchPosts);

  if (isLoading) return <ListSkeleton />;
  if (isError) return <p>Error loading images</p>;

  return (
    <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mb-10">
      {allPosts.map((post: any) => (
        <ImageItem
          key={post._id}
          alt_description={post.prompt}
          url={post.photo}
        />
      ))}
    </section>
  );
};

export default AiImageContainer;

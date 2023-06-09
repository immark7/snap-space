"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import ListSkeleton from "./ListSkeleton";
import useInView from "@/hooks/useInView";
import { useAppStore } from "@/store/useAppStore";

const UNSPLASH = process.env.unsplash;

const fetchPhotos = async (page: number, query: string) => {
  if (query.length) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${UNSPLASH}`
    );
    const data = await response.json();
    return data.results;
  }

  const response = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=${UNSPLASH}`
  );

  return response.json();
};

const ImageContainer = () => {
  const { searchQuery } = useAppStore();
  const [ref, inView] = useInView();

  const {
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    data: images,
  } = useInfiniteQuery(
    ["images", searchQuery],
    ({ pageParam = 1 }) => fetchPhotos(pageParam, searchQuery),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      getPreviousPageParam: (firstPage, allPages) => firstPage,
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <ListSkeleton />;
  if (isError) return <p>Error loading images</p>;
  if (images.pages[0].length === 0)
    return <p className="mt-10">No images found</p>;

  const imageList = images.pages.map((page) =>
    page.map((photo: any) => (
      <ImageItem key={photo.id} {...photo} url={photo.urls.small} />
    ))
  );

  return (
    <>
      <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mb-10">
        {imageList}
      </section>
      <div ref={ref} />
    </>
  );
};

export default ImageContainer;

import AiGenerator from "@/components/AiGenerator";
import AiImageContainer from "@/components/AiImageContainer";
import React from "react";

const page = () => {
  return (
    <section className="container flex max-w-[64rem] flex-col gap-4 py-8">
      <h1 className="text-4xl mb-2">
        Generate an imaginative image through DALL-E AI.
      </h1>
      <AiGenerator />
      <AiImageContainer />
    </section>
  );
};

export default page;

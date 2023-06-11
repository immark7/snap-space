import AiGenerator from "@/components/AiGenerator";
import AiImageContainer from "@/components/AiImageContainer";
import React from "react";

const page = () => {
  return (
    <section className="pb-8 pt-6 md:pb-12 md:pt-8 lg:py-10">
      <div className="container flex max-w-[80rem] flex-col gap-4 pb-14">
        <h1 className="text-4xl mb-4">
          Generate an imaginative image through AI.
        </h1>
        <AiGenerator />
      </div>
      <AiImageContainer />
    </section>
  );
};

export default page;

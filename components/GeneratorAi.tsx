"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getRandomPrompt } from "@/lib/func";

const GeneratorAi = () => {
  const [form, setForm] = useState({
    prompt: "",
  });

  const handleRandomPrompt = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <p className="text-muted-foreground">
          Start with a detailed description.
        </p>
        <button
          onClick={handleRandomPrompt}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Exciting prompt
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[720px] items-center space-x-2"
      >
        <Input
          onChange={handleChange}
          type="text"
          name="prompt"
          placeholder="A painting of a phoenix rising out of flames against a black background"
          value={form.prompt}
        />

        <Button type="submit">Generate</Button>
      </form>
    </div>
  );
};

export default GeneratorAi;

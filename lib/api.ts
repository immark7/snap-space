const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/post`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Fetch failed");
  }

  const { data } = await response.json();
  return data.reverse();
};

export const generateImage = async (prompt: string) => {
  const response = await fetch(`${API_URL}/dalle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate image");
  }

  const { photo } = await response.json();
  return `data:image/jpeg;base64,${photo}`;
};

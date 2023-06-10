export function getRandomPrompt(prompt: String) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
  
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
  
    return randomPrompt;
  }
  const surpriseMePrompts = [
    'A robotic octopus exploring a coral reef in the future, digital art',
    'A surreal painting of a cityscape made entirely of plants, digital mixed media',
    'An alien in a spacesuit relaxing on a rooftop garden, digital art',
    'A photograph of a city skyline at night, with a lightning storm in the background, long exposure',
    'A painting of a dragonfly with metallic wings against a bright orange background',
    'A futuristic cityscape where the buildings have grown over time to resemble trees, digital art',
    'A photograph of a train passing through a vibrant green forest, motion blur',
    'A portrait of a person with a neon light background and a holographic overlay, digital art',
    'A close-up photograph of a butterfly wing, macro photography',
    'A 3D render of a geometric city with bright pastel colors, digital art',
    'A painting of a lion wearing a crown made of flowers in a field of lavender',
    'A photograph of a deserted beach with a single palm tree and a wooden boat, minimalism',
    'A robotic bee pollinating flowers in a futuristic garden with massive hanging planters, digital art',
    'A photograph of a frozen waterfall in a national park, long exposure',
    'A painting of a phoenix rising out of flames against a black background',
    'An illustration of a hummingbird with vibrant colors and intricate details',
    'A photograph of a city street at night with raindrops on the windshield, bokeh effect',
    'A painting of an abstract landscape with a rainbow sky and dark mountains in the distance',
    'A 3D render of a futuristic car racing through a tunnel made of light, digital art',
    'A photograph of a bird in flight with a mirrored reflection in the water, symmetry',
  ]
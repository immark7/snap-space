import ScrollToTop from "@/components/ScrollToTop";
import Search from "@/components/Search";
import ImageContainer from "@/components/image/ImageContainer";

export default function Home() {
  return (
    <>
      <section className="pb-8 pt-6 md:pb-12 md:pt-8 lg:py-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            target="_blank"
            href="https://github.com/immark7/snap-space"
            className={`rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium `}
          >
            Follow along on Github
          </a>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Search for the perfect image and bring your ideas to life.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I m building a web app with Next.js 13 and open-sourcing it.
          </p>
        </div>
        <Search />
        <ImageContainer />
        <ScrollToTop />
      </section>
    </>
  );
}

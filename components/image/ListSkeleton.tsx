import { Skeleton } from "../ui/skeleton";

const ListSkeleton = () => {
  const skeletonCount = 12;
  const skeletonArray = Array.from({ length: skeletonCount }, (_, i) => (
    <Skeleton key={i} className="aspect-square bg-muted rounded-lg" />
  ));
  return (
    <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mb-10">
      {skeletonArray}
    </section>
  );
};

export default ListSkeleton;

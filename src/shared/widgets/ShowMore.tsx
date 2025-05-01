import { JSX, useState } from "react";

interface ShowMoreProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  initialCount?: number;
}

const ShowMore = <T,>({
  items,
  renderItem,
  initialCount = 3,
}: ShowMoreProps<T>) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      {items.slice(0, showAll ? items.length : initialCount).map(renderItem)}
      {items.length > initialCount && (
        <p
          className="mt-2 cursor-pointer text-[18px] text-[#18470D] underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </p>
      )}
    </div>
  );
};

export default ShowMore;

import "./Pagination.css";

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getPaginationRange(
  totalPages: number,
  currentPage: number,
  siblingCount = 1
): (number | "ellipsis")[] {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightsDots = rightSibling < totalPages - 1;

  const firstPage = 1;
  const lastPage = totalPages;

  if (!showLeftDots && showRightsDots) {
    const leftRange = range(1, rightSibling + 1);
    return [...leftRange, "ellipsis", lastPage];
  }

  if (showLeftDots && !showRightsDots) {
    const rightRange = range(leftSibling - 1, lastPage);
    return [firstPage, "ellipsis", ...rightRange];
  }

  return [
    firstPage,
    "ellipsis",
    ...range(leftSibling, rightSibling),
    "ellipsis",
    lastPage,
  ];
}

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  size = "md",
  className,
}: PaginationProps) {
  const pageItems = getPaginationRange(totalPages, currentPage, 1);
  const goTo = (page: number) => {
    const next = Math.min(Math.max(page, 1), totalPages);
    if (next !== currentPage) onPageChange(next);
  };

  return (
    <div
      className={`pagination-container pagination--${size} ${className ?? ""}`}
    >
      <button
        className="pagination-button"
        disabled={currentPage === 1 || totalPages <= 1}
        onClick={() => goTo(currentPage - 1)}
        aria-label="Previous page"
      >
        Prev
      </button>
      {pageItems.map((item, idx) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`dots-${idx}`}
              className="pagination-ellipses"
              aria-hidden="true"
            >
              ...
            </span>
          );
        }
        const page = item as number;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            className={`pagination-button ${isActive ? "active" : ""}`}
            onClick={() => goTo(page)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        );
      })}

      <button
        className="pagination-button"
        disabled={currentPage === totalPages || totalPages <= 1}
        onClick={() => goTo(currentPage + 1)}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

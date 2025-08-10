interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: () => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <button disabled={currentPage === 1}>Anterior</button>

      {/* Renderiza todos os números de páginas */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <button key={page} className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

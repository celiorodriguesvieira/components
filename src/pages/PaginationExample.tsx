import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";

export function PaginationExamples() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(10);
  const [page3, setPage3] = useState(29);

  return (
    <div style={{ display: "grid", gap: 32 }}>
      <div>
        <h3>Few pages (without ellipsis)</h3>
        <Pagination
          totalPages={6}
          currentPage={page1}
          onPageChange={setPage1}
        />
      </div>
      <div>
        <h3>Many pages (middle of the page)</h3>
        <Pagination
          totalPages={30}
          currentPage={page2}
          onPageChange={setPage2}
        />
      </div>
      <div>
        <h3>Near the end</h3>
        <Pagination
          totalPages={30}
          currentPage={page3}
          onPageChange={setPage3}
        />
      </div>
    </div>
  );
}

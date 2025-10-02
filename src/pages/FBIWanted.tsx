import { useEffect, useState } from "react";
import "./FBIWanted.css";

type FBIItem = {
  uid: string;
  title: string;
  sex?: string;
  nationality: string;
  reward_text?: string;
  url?: string;
  images?: { original: string; thumb?: string }[];
};

// useEffect(() => {
//   async function fetchData() {
//     try {
//       setLoading(true);
//       setError(null);

//       const url = `https://api.fbi.gov/wanted/v1/list?page=${page - 1}`;
//       const res = await fetch(url);

//       if (!res.ok) {
//         throw new Error("Error to search data FBI");
//       }

//       const data = await res.json();
//       setItems(data.items ?? []);
//       setTotal(data.total ?? 0);
//     } catch (e: any) {
//       setError(e.message ?? "Erro desconhecido");
//     } finally {
//       setLoading(false);
//     }
//   }
//   fetchData();
// }, [page]);

export function FBIWantedPage() {
  // const [query, setQuery] = useState("");
  // const [sex, setSex] = useState<"" | "Male" | "Female">;

  // const [page, setPage] = useState(1);

  // const [intems, setItems] = useState<FBIItem[]>([]);
  // const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="fbi-page">
      <h1 className="fbi-title">FBI Wanted</h1>

      {loading && <p style={{ color: "#9ca3af" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}

      {!loading && !error && (
        <div className="wanted-grid">
          <div className="wanted-card">
            <div className="wanted-card-body">
              <h2 className="wanted-card-title">Sample Person</h2>
              <p className="wanted-card-info">Example info here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

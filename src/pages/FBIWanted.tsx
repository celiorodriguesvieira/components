import { useEffect, useState } from "react";
import "./FBIWanted.css";
import { Card } from "../components/Card/Card";
import { Badge } from "../components/Badge/Badge";
import { InputText } from "../components/InputText/InputText";

type FBIItem = {
  uid: string;
  title: string;
  sex?: string;
  nationality?: string;
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
  const [query, setQuery] = useState("");
  const [sex, setSex] = useState<"" | "Male" | "Female">("");

  // const [page, setPage] = useState(1);

  // const [items, setItems] = useState<FBIItem[]>([]);
  // const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const items: FBIItem[] = [
    {
      uid: "1",
      title: "Sample Person",
      nationality: "Brazil",
      sex: "Male",
      reward_text: "Reward up to $10,000",
      url: "https://www.fbi.gov",
      images: [
        {
          original:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
        },
      ],
    },
    {
      uid: "2",
      title: "Jane Joe",
      nationality: "USA",
      reward_text: "No reward information",
      sex: "Female",
      url: "https://fbi.gov",
      images: [],
    },
  ];

  const grid = (
    <div>
      {items.map((it) => {
        const img =
          it.images && it.images.length > 0 ? it.images[0].original : undefined;

        return (
          <div className="fbi-grid">
            <Card
              key={it.uid}
              title={it.title}
              subtitle={it.nationality ?? "Unknown nationality"}
              description={it.reward_text}
              imageSrc={img}
              onActionClick={() => window.open(it.url ?? "#", "blank")}
            >
              {it.sex && <Badge label={it.sex} />}
            </Card>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="fbi-page">
      <h1 className="fbi-title">FBI Wanted</h1>
      <div className="fbi-filters">
        <div className="fbi-filters-row">
          <InputText
            label="Search"
            placeholder="Type a name:..."
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="fbi-filter-field">
            <label htmlFor="sex">Sex</label>
            <select
              id="sex"
              value={sex}
              onChange={(event) =>
                setSex(event.target.value as "Male" | "Female" | "")
              }
            >
              <option value="">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
      {loading && <p style={{ color: "#9ca3af" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && grid}
    </div>
  );
}

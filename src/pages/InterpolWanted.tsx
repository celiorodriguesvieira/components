import { useEffect, useState } from "react";
import "./InterpolWanted.css";
import { Card } from "../components/Card/Card";
import { InputText } from "../components/InputText/InputText";
import { Badge } from "../components/Badge/Badge";

type InterpolItem = {
  entity_id: string;
  name: string;
  forename?: string;
  sex_id?: "M" | "F" | "U";
  nationalities?: string[];
  _links?: { images?: { href: string } };
  imageUrl?: string;
};

export function InterpolWantedPage() {
  const [query, setQuery] = useState("");
  const [sex, setSex] = useState<"" | "Male" | "Female">("");
  const [items, setItems] = useState<InterpolItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Base URL da Interpol
        const baseUrl = "https://ws-public.interpol.int/notices/v1/red";

        // Montando parâmetros de busca
        const params = new URLSearchParams();
        if (query) params.set("name", query); // busca por nome
        if (sex)
          params.set(
            "sexId",
            sex === "Male" ? "M" : sex === "Female" ? "F" : ""
          );

        // Montando URL completa
        const url = `${baseUrl}?${params.toString()}`;

        // Fazendo o fetch
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching Interpol data");

        // Convertendo para JSON
        const data = await response.json();

        // A API retorna em _embedded.notices
        const notices = data?._embedded?.notices ?? [];
        const noticesWithImages = await Promise.all(
          notices.map(async (it: any) => {
            const imageUrl = await getMainImage(it);

            const detailRes = await fetch(it._links?.self?.href ?? "");
            const detailData = detailRes.ok ? await detailRes.json() : {};

            return { ...it, imageUrl, sex_id: detailData.sex_id ?? null };
          })
        );

        // Salvando no estado
        console.log("Interpol item example:", data?._embedded?.notices?.[0]);
        setItems(noticesWithImages);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, sex]);

  async function getMainImage(it: {
    _links?: { images?: { href: string } };
  }): Promise<string> {
    const fallback =
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";
    const imagesUrl = it._links?.images?.href;

    if (!imagesUrl) return fallback;

    try {
      const res = await fetch(imagesUrl);
      if (!res.ok) return fallback;

      const data = await res.json();

      const imageLink = data?._embedded?.images?.[0]?._links?.self?.href;

      return imageLink ?? fallback;
    } catch {
      return fallback;
    }
  }

  const grid = (
    <div className="interpol-grid">
      {items.map((it) => (
        <Card
          key={it.entity_id}
          title={`${it.forename ?? ""} ${it.name ?? ""}`}
          imageSrc={it.imageUrl}
          variant="dark"
        >
          {it.nationalities && (
            <p className="interpol-card-info">{it.nationalities.join(", ")}</p>
          )}

          {it.sex_id && (
            <>
              <Badge
                variant={
                  it.sex_id === "M"
                    ? "male"
                    : it.sex_id === "F"
                    ? "female"
                    : "neutral"
                }
              >
                {it.sex_id === "M"
                  ? "Male"
                  : it.sex_id === "F"
                  ? "Female"
                  : "neutral"}{" "}
              </Badge>
            </>
          )}
        </Card>
      ))}
    </div>
  );

  return (
    <div className="interpol-page">
      <h1 className="interpol-title">INTERPOL Wanted</h1>

      <div className="interpol-filters">
        <div className="interpol-filters-row">
          <InputText
            label="Search"
            placeholder="Type a name:..."
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="interpol-filter-field">
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

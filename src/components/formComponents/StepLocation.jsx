import { useState } from "react";

const StepLocation = ({ formData, setFormData, next }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (place) => {
    const { lat, lon, display_name, address } = place;
    setFormData((prev) => ({
      ...prev,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      address: display_name,
      postalCode: address?.postcode || "",
    }));
    setResults([]);
    setQuery(display_name);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-bold">Business Location</h2>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter address or business name"
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-richBlack text-white px-4 py-1 rounded-sm"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Searching…</p>}

      {results.length > 0 && (
        <ul className="border rounded divide-y">
          {results.map((place, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(place)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}

      {formData.address && (
        <div className="mt-2 space-y-1">
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Postal Code:</strong> {formData.postalCode}
          </p>
          <p>
            <strong>Latitude:</strong> {formData.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {formData.lon}
          </p>
        </div>
      )}

      <button
        onClick={next}
        className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
      >
        Next
      </button>
    </div>
  );
};

export default StepLocation;

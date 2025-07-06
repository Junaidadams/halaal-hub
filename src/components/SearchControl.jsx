import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import PropTypes from "prop-types";

const SearchControl = ({ onResult }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await apiRequest.get("/util/geocode", {
        params: { query: search },
      });

      if (res.data && res.data.length > 0) {
        setResults(res.data);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      console.error("Geocoding error:", err.message);
      setError("Failed to fetch locations.");
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = (place) => {
    const coords = {
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    };

    onResult(coords); // Send coordinates back to parent (e.g., MapView)
    setResults([]); // Clear dropdown
    setSearch(""); // Clear search bar
  };

  return (
    <div className="absolute z-50 top-4 left-1/2 transform -translate-x-1/2 w-80 bg-white shadow rounded p-2">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-2 py-1 border rounded-l focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-2">Searching...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results.length > 0 && (
        <ul className="mt-2 max-h-40 overflow-y-auto border rounded">
          {results.map((place, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100 px-2 py-1"
              onClick={() => handleResultClick(place)}
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchControl.propTypes = {
  onResult: PropTypes.func.isRequired,
};

export default SearchControl;

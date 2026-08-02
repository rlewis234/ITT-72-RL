import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ShowList from "./components/ShowList";
import ShowSortBy from "./components/ShowSortBy";
import Footer from "./components/Footer";

export default function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("Bones"); // defualt search to show fectch loading data on App startup.
  const [sortBy, setSortBy] = useState("name");
  const [ascending, setAscending] = useState(true);
  const [genre, setGenre] = useState("All");
  const [language, setLanguage] = useState("All");
  const [minRating, setMinRating] = useState("All");
  const [status, setStatus] = useState("All");
  const [premYear, setYear] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  async function fetchShows(query) {
      if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();

      if (data.length === 0) {
        setShows([]);
        setError("No TV shows found.");
      } else {
        setShows(data);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to fetch data.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchShows(search);
  }, []);

  const genres = [
    "All",
    ...new Set(
      shows.flatMap((item) => item.show.genres)
      ),
  ].sort();

  const languages = [
  "All",
  ...new Set(
    shows
      .map((item) => item.show.language)
      .filter((language) => language !== null)
  ),].sort();

  const years = [
    { label: "All", min: null, max: null },
    { label: "Before 2000", min: null, max: 1999 },
    { label: "2000 - 2009", min: 2000, max: 2009 },
    { label: "2010 - 2019", min: 2010, max: 2019 },
    { label: "2020 - Present", min: 2020, max: Infinity },
  ];

  const sortedShows = [...shows].sort((a, b) => {
  let comparison = 0;


  switch (sortBy) {
    case "name":
      comparison = a.show.name.localeCompare(b.show.name);
      break;

    case "rating":
      comparison =
        (a.show.rating.average ?? 0) -
        (b.show.rating.average ?? 0);
      break;

    case "premiered":
      comparison =
        new Date(a.show.premiered ?? 0) -
        new Date(b.show.premiered ?? 0);
      break;
    
    case "network":
      comparison = (a.show.network?.name ?? "").localeCompare(
      b.show.network?.name ?? ""
      );
    break;

    default:
      comparison = 0;
    }

    return ascending ? comparison : -comparison;

  });

  const filteredShows = sortedShows.filter((item) => {
    const selectedRange = years.find((y) => y.label === premYear);
    const premieredYear = Number(item.show.premiered?.slice(0, 4));

    const matchesGenre =
      genre === "All" || item.show.genres.includes(genre);

    const matchesLanguage =
      language === "All" || item.show.language === language;

    const matchesRating =
      minRating === "All" ||
      (item.show.rating.average ?? 0) >= Number(minRating);
    
    const matchesStatus =
      status ==="All" ||
      item.show.status === status;
    
    const matchesYear =
      !selectedRange ||
      selectedRange.label === "All" ||
      (premieredYear >= selectedRange.min &&
        premieredYear <= selectedRange.max);

    return matchesGenre && matchesLanguage && matchesRating && matchesStatus && matchesYear;
  });

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme}/>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={() => fetchShows(search)}
      />

      <ShowSortBy
        sortBy={sortBy}
        setSortBy={setSortBy}
        ascending={ascending}
        setAscending={setAscending}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
        language={language}
        setLanguage={setLanguage}
        languages={languages}
        minRating={minRating}
        setMinRating={setMinRating}
        status={status}
        setStatus={setStatus}
        premYear = {premYear}
        setYear = {setYear}
        years = {years}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && <ShowList shows={filteredShows} />}

      <Footer />

    </div>
  );
}
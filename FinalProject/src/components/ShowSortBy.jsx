function ShowSortBy({sortBy, setSortBy, ascending, setAscending, genre, setGenre, genres, language, setLanguage, languages, minRating, setMinRating, status, setStatus, premYear, setYear, years}){
    return(
        <div className="filters-panel">

    <div className="filter-group search-sort">
        <div className="filter">
            <label htmlFor="showSortBy">Sort By</label>
            <select
                id="showSortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="name">Title</option>
                <option value="rating">Rating</option>
                <option value="premiered">Premiered</option>
                <option value="network">Network</option>
            </select>
        </div>

        <button
            className="sort-direction"
            onClick={() => setAscending(!ascending)}
        >
            {ascending ? "Ascending ↑" : "Decending ↓"}
        </button>
    </div>

    <div className="filter">
        <label>Genre</label>
        <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
        >
            {genres.map(g => (
                <option key={g}>{g}</option>
            ))}
        </select>
    </div>

    <div className="filter">
        <label>Language</label>
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
        >
            {languages.map(l => (
                <option key={l}>{l}</option>
            ))}
        </select>
    </div>

    <div className="filter">
        <label htmlFor="ratingsel">Minimum Rating</label>
        <select
            id="ratingsel"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
        >
            <option value="All">All</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
            <option value="5">5+</option>
        </select>
    </div>


    <div className="filter">
        <label htmlFor="statussel">Status</label>
        <select
            id="statussel"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Running">Running</option>
            <option value="Ended">Ended</option>
        </select>
    </div>


    <div className="filter">
        <label>Premiered</label>
        <select
            value={premYear}
            onChange={(e) => setYear(e.target.value)}
        >
            {years.map(y => (
                <option key={y.label}>{y.label}</option>
            ))}
        </select>
    </div>

</div>

    );
}

export default ShowSortBy;
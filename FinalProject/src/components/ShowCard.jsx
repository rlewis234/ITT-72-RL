import placeholder from "../assets/placeholder.png";

function ShowCard({ show }) {
  return (
    <div className="card">
      <img src={show.image?.medium || placeholder} alt={show.name} />

      <div className="card-body">
        <h2>{show.name}</h2>

        <p>
          <strong>Rating:</strong>{" "}
          {show.rating?.average ?? "Not rated"}
        </p>

        <p>
          <strong>Genres:</strong>{" "}
          {show.genres?.length
            ? show.genres.join(", ")
            : "No genres listed"
          }
        </p>

        <p>
          <strong>Premiered:</strong>{" "}
          {show.premiered || "Unknown"}
        </p>

        <p>
          <strong>Language:</strong>{" "}
          {show.language || "Unknown"}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {show.status || "Unknown"}
        </p>

        <p>
          <strong>Runtime:</strong>{" "}
          {show.runtime ? `${show.runtime} minutes` : "Unknown"}
        </p>

        <p>
          <strong>Network:</strong>{" "}
          {show.network?.name || "Not available"}
        </p>

        <p>
          <strong>Official Site:</strong>{" "}
          {show.officialSite ? (
            <a
              href={show.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          ) : (
            "Not available"
          )}
        </p>

        <div
          className="summary"
          dangerouslySetInnerHTML={{
            __html: show.summary || "<p>No summary available.</p>",
          }}
        />
      </div>
    </div>
  );
}

export default ShowCard;
import ShowCard from "./ShowCard";

export default function ShowList({ shows }) {
  return (
    <div className="show-grid">
      {shows.map((item) => (
        <ShowCard
          key={item.show.id}
          show={item.show}
        />
      ))}
    </div>
  );
}
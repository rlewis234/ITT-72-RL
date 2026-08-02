import ShowCard from "./ShowCard";

function ShowList({ shows }) {
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

export default ShowList;
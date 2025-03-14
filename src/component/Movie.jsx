export default function Movie({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={poster} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-end">
        <h5 className="card-title">{title}</h5>
        <p className="card-text d-flex">
          {year} <span className="ms-auto d-inline-block">{type}</span>
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetailsViews } from "../services/movie-api";


export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesDetailsViews(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
      <>
          <h1>Одна киношка</h1>
      {/* <PageHeading text={`Книга ${bookId}`} />

      {movie && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )} */}
    </>
  );
}
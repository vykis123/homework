import Film_Info from "../assets/constant";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = () => {
  return (
    <div className={classes.movie_container}>
      {Film_Info.map((movie, index) => (
        <Movie
          key={index}
          image={movie.image}
          title={movie.title}
          description={movie.info}
          year={movie.year}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;

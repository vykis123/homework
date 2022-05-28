import MovieList from "../components/MovieList";
import Navigation from "../components/Navigation";
import classes from "./User.module.css";

const User = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <h1 className={classes.heading}>
        These are the movies, which I selected and liked the most!😊
      </h1>
      <MovieList />
    </div>
  );
};

export default User;

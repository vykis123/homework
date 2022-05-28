import Navigation from "../components/Navigation";
import classes from "./Fav.module.css";

import Film_Info from "../assets/constant";
import Movie from "../components/Movie";

const Fav = () => {
  const filteredFavourites = Film_Info.filter((movie) => movie.id === "Best");

  return (
    <div className={classes.container}>
      <Navigation />
      <h1 className={classes.heading}>
        But these movies are the best for me atleast 😎
      </h1>
      <div className={classes.card_wrapper}>
        {filteredFavourites.map((movie, index) => (
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
    </div>
  );
};

export default Fav;

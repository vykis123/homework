import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card__img}
        src={props.image}
        alt="This is movie poster"
      />
      <h2 className={classes.card__title}>{props.title}</h2>

      <div className={classes.card__info}>
        <p className={classes.card__info_text}>{props.description}</p>
        <span className={classes.card__info_year}>{props.year}</span>
      </div>
    </div>
  );
};

export default Movie;

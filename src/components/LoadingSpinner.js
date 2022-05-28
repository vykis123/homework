import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div>
      <div id={classes.loop} className={classes.center}></div>
      <div id={classes.bike_wrapper} className={classes.center}>
        <div id={classes.bike} className={classes.centerBike}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

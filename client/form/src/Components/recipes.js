import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    color: "black",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function RecipesCard({ recipe }) {
  console.log(recipe);
  const classes = useStyles();
  return (
    <div>
      {recipe.map(item => {
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.course}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {item.technique}
              </Typography>
              <Typography variant="body2" component="p">
                {item.ingredients.map(ingredient => {
                   return <li>{ingredient}</li>
                })}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default RecipesCard;

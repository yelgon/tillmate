import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    fontFamily: "arial",
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "10px",
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const albumId = Array.from({ length: 100 }, (_, i) => i + 1);
  // made array which has elements from 1 to 100
  // It didn't specify albumId so I made this to implement every albumId
  // which make me uncomfortable because code is not so beautiful

  const classes = useStyles();
  // brought style component

  return (
    <div className={classes.root}>
      <Paper className={classes.header}>Click an album id to see images</Paper>
      <Grid container spacing={1}>
        {albumId.map((id) => (
          // map is array method to excute every element
          // argument id is linked to each albumId as a button
          // I used wild card(:albumId) in App.js so that allow me to get albumId by useParams in child component

          <Grid item xs key={id}>
            <Link to={`/album/${id}`} style={{ textDecoration: "none" }}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="default">
                  {id}
                </Button>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

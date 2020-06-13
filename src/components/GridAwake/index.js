import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';

import { createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src="https://media3.giphy.com/media/qZohEEh4bhuQ8/giphy.gif?cid=6104955eec03a397e8f246036534b4597eed2d1fcfa22281&rid=giphy.gif" alt="Sun" style={{verticalAlign: "middle", width: "500px", height: "500px", padding: "30px" }}></img>
            </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

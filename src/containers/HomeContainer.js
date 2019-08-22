import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Home from '../components/Home';
import TechnicalSkills from '../components/TechnicalSkills';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%'
  }
})

const HomeContainer = withStyles(styles)(({ classes }) => {
  return (
    <div>
      <Grid>
        <img src="/img/banner2.jpg" className={classes.image}></img>
        <Container className={classes.paper}>
          <Home />
        </Container>
      </Grid>
      <Grid xs={6} sm={4}>
        <TechnicalSkills />
      </Grid>
    </div>

  )
})

export default HomeContainer;
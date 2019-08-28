import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    opacity: .75
  }
})

const ContactMe = withStyles(styles)(({classes}) => {

  return (
    <div className={classes.root} id="contact">
      <Container>
        <Paper>
          <Typography variant="h4" align="center">
            Contact Me
          </Typography>
          <Typography variant="h5" align="center">
            Email: <a href="mailto:chhaian@gmail.com">Chhaian Pin</a><br />
          </Typography>
          <Typography variant="subtitle2" align="center">
            Copyright © 2019, Chhaian Pin, All Rights Reserved.
          </Typography>
        </Paper>
      </Container>
    </div>
  )
})

export default ContactMe;
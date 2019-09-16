import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from '../sidebar';

const MenuAppBar= ({ tema }) => (
    <div>
      <AppBar position="static" color="inherit" className={tema}>
        <Toolbar>
        <TemporaryDrawer></TemporaryDrawer>
        
          <Typography variant="h6">
          { tema }
          </Typography>        
        </Toolbar>
      </AppBar>
    </div>
);

const mapStateToProps = state => ({
  tema: state.tema
});


export default connect(mapStateToProps)(MenuAppBar);
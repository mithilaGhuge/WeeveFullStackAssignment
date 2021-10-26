import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { withStyles } from "@material-ui/core";
const style = {
    header: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        backgroundColor: '#FAFAFA',
    },
    headerTitleStyle: {
        color: '#4A4A4A'
      }
}

const PageName=(props)  => {
        const { classes } = props;
    return (
        <AppBar position="static" className={classes.header} >
            <Toolbar>
                <h3 className={classes.headerTitleStyle}> Full Stack Assignment</h3>
            </Toolbar>
        </AppBar>
    
    )
}
export default withStyles( style )( PageName );
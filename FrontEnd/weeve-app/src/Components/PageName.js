import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

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
                <Typography className={classes.headerTitleStyle}> Full Stack Assignment</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default withStyles( style )( PageName );
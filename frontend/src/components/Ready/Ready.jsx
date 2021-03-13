import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

const Ready = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
        <CssBaseline />
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom:"1rem" }}>
                <CheckCircleIcon style={{ color: green[500], fontSize: 40}} />   
             </div> 
             <Box p={1} bgcolor="background.paper">
                <Typography variant="h4" align="center">Pedido Realizado</Typography>
             </Box>            
            
            <Divider variant="middle" />
            <Box p={2} >
                <Typography  variant="h6" align="center"> Gracias por su compra, su pedido estara listo en unos minutos</Typography>
            </Box>                  
            </Paper>
        </main>
        </div>
    )
}

export default Ready

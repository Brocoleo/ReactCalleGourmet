import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Typography, Button, ButtonGroup} from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import {grey, red} from '@material-ui/core/colors';
import useStyles from './styles';



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const ActionButton = withStyles((theme) => ({
  root: {
    borderRadius: '12px',
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[300],
    },
  },
}))(Button);

export default function CarroItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.media.source} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {item.name} x  {item.quantity}
                </Typography>
                

                <ButtonGroup disableElevation variant="contained" color="primary">
                  <Button className={classes.textSizeLarge} type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                  <Button className={classes.textSizeLarge} type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity+1)}>+</Button>
                </ButtonGroup>
                
              </Grid>
              
            </Grid>
            <Grid item>
              <Typography className={classes.precio}>{item.line_total.formatted_with_symbol}</Typography>
              <ColorButton  variant="contained" type="button"  onClick={() => onRemoveFromCart(item.id)}>Quitar</ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>  
  );
}

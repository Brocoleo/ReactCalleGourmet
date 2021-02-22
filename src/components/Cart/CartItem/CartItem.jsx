import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import {red, grey } from '@material-ui/core/colors';

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
    fontSize : '20px',
    borderRadius: '12px',
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[300],
    },
  },
}))(Button);

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>     
        <Typography className={classes.title} variant="h5" >{item.name}</Typography>
        <Typography className={classes.price} >{item.line_total.formatted_with_symbol}</Typography>      
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <ActionButton type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity-1)}>-</ActionButton>
          <Typography>{item.quantity}</Typography>
          <ActionButton type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity+1)}>+</ActionButton>
        </div>
        <ColorButton  variant="contained" type="button"  onClick={() => onRemoveFromCart(item.id)}>Quitar</ColorButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
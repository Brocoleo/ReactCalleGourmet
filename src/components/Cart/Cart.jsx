import React from 'react';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import {red, blue} from '@material-ui/core/colors';
import useStyles from './styles';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart,  handleEmptyCart}) =>{
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[700]),
      backgroundColor: red[700],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  const OKButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[700]),
      backgroundColor: blue[700],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
  }))(Button);

  const EmptyCart = () =>(
    <Typography variant="subtitle1">You have no items in your shopping car, strt adding some!
      <Link to="/" className>start adding some</Link>
    </Typography>
  );

  const FilledCart = () => {
    return(
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item = {item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
          <div className={classes.cardDetails}>
            <div className={classes.total}>
              <Typography className={classes.title} >  Total : </Typography>
              <Typography className={classes.price} > {cart.subtotal.formatted_with_symbol}</Typography>  
            </div>       
             <div>
               <ColorButton className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick= "{handleEmptyCart"> Borrar</ColorButton>
               <OKButton component = {Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="Primary">Continuar</OKButton>
             </div>
          
          </div>

    </div>
    )
  };

  if (!cart.line_items) return 'Loading';

  return(
    <div className={classes.container}>
      <Container >
          <div className={classes.toolbar}/>
          <Typography className={classes.title} gutterBotttom>
            Detalles del Pedido
            </Typography>
          
          { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
      </div>
  )

  
}

export default Cart;
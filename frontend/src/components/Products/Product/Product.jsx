import React from 'react';
import {
 
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
  } from './styles';
  import Snackbar from '@material-ui/core/Snackbar';
  import IconButton from '@material-ui/core/IconButton';
  import CloseIcon from '@material-ui/icons/Close';

  

const  Product = ({ product, onAddToCart}) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    onAddToCart(product.id, 1)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
    return (
      
        <ProductCard>
            <ProductImg  src={product.media.source} title={product.name}  />
            <ProductInfo>                
                    <ProductTitle gutterBottom variant="h5">{product.name}        </ProductTitle>
                    <ProductPrice gutterBottom variant="h5">{product.price.formatted_with_symbol}</ProductPrice>                             
                    <ProductDesc dangerouslySetInnerHTML={{__html: product.description}}  variant="body2" color="textSecondary" />             
                    <div>
                    <ProductButton aria-label="Add to Cart" onClick={handleClick}>Agregar</ProductButton>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={1500}
                        onClose={handleClose}
                        message= {`Agrego ${product.name} al pedido`}
                        action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                    </div>             
            </ProductInfo>           

        </ProductCard>
  

    
         
        
     
    )
}

export default Product

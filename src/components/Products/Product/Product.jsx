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

const  Product = ({ product, onAddToCart}) => {
    
    return (
      
        <ProductCard>
            <ProductImg  src={product.media.source} title={product.name}  />
            <ProductInfo>                
                    <ProductTitle gutterBottom variant="h5">{product.name}        </ProductTitle>
                    <ProductPrice gutterBottom variant="h5">{product.price.formatted_with_symbol}</ProductPrice>                             
                    <ProductDesc dangerouslySetInnerHTML={{__html: product.description}}  variant="body2" color="textSecondary" />                     
                    <ProductButton aria-label="Add to Cart" onClick = {()=>onAddToCart(product.id, 1)}>Agregar al pedido</ProductButton>               
            </ProductInfo>           

        </ProductCard>
  

    
         
        
     
    )
}

export default Product

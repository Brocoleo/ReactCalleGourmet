import React from 'react'; 
import Product from './Product/Product';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
} from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const Products = ({ heading, products, onAddToCart }) => {

 
    
    return (
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          { !products.length ? <CircularProgress color="secondary" />
            : products.map((product, i) => (
              <Product key={i} product={product} onAddToCart={onAddToCart}/>            
          ))    
          }
        </ProductWrapper>
      </ProductsContainer>
    );
  };

export default Products;
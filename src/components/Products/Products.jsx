import React from 'react'; 
import Product from './Product/Product';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
} from './styles';


const Products = ({ heading, products, onAddToCart }) => {
    
    return (
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {products.map((product) => (
              <Product product={product} onAddToCart={onAddToCart}/>            
          ))}
        </ProductWrapper>
      </ProductsContainer>
    );
  };

export default Products;
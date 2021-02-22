import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtn
} from './styles';

const Hero = () => {
  

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>         
          <HeroH1>La Calle</HeroH1>
          <HeroH2>Gourmet</HeroH2>
          <HeroP>El Bajon Necesario &#128523;</HeroP>
          <HeroBtn>Iniciar Pedido</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
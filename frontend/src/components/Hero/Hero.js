import React from 'react';
import {Link} from 'react-router-dom';
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
          <HeroP>El Bajon Necesario 
          <span role="img" aria-label="sheep">😋</span>
          </HeroP>
          <Link to="/nosotros">
          <HeroBtn component = {Link} >Acerca de Nosotros</HeroBtn>
          </Link>         
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
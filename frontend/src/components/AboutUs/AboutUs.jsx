import React from 'react'
import classNames from "classnames";
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "./components/Parallax/Parallax";
import GridContainer from "./components/Grid/GridContainer";
import GridItem from "./components/Grid/GridItem";
import Button from "./components/CustomButtons/Button.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

const useStyles = makeStyles(styles);

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("../../images/featured3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
     
        </div>
      </div>
    </div>
  )
}

export default AboutUs

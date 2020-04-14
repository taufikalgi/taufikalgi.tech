import React from "react";
import styled from "styled-components";
import Icon from "../../assets/logo.svg";
import TextLoop from "react-text-loop";
import { Link, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const twitter = "https://twitter.com/taufikaf_";
const ig = "https://instagram.com/taufikalgi_";
const github = "https://github.com/taufikalgi";
const linkedIn = "https://linkedin.com/in/taufikalgi";
const mail = "mailto:taufik.algi99@gmail.com/?subject=Hi";

class HomeComponent extends React.Component {
  render() {
    return (
      <Container className="Home">
        <img src={Icon} alt="Icon" />
        <Algi>Taufik Algi Fahri</Algi>
        <Desc>
          I am a Computer Science Sophomore at Universitas Indonesia. This site
          was designed to be a portfolio and recording my personal experiences
          in adventure learning new and interesting things for me.
        </Desc>
        <TextLoop className="loop" interval={1500} mask={true}>
          <span>
            Computer Science{" "}
            <span role="img" aria-label="student">
              👨‍🎓
            </span>
          </span>
          <span>
            Tech{" "}
            <span role="img" aria-label="laptop">
              💻
            </span>
          </span>
          <span>
            Taekwondo-in{" "}
            <span role="img" aria-label="taekwondo">
              🥋
            </span>
          </span>
        </TextLoop>
        <Contact>
          <Link href={linkedIn}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </Link>
          <Link href={twitter}>
            <FontAwesomeIcon icon={["fab", "twitter-square"]} size="lg" />
          </Link>
          <Link href={ig}>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
          </Link>
          <Link href={github}>
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </Link>
          <Link href={mail}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Link>
        </Contact>
      </Container>
    );
  }
}

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);

  img {
    width: 250px;
    height: 250px;
    margin-bottom: 0.25em;
  }

  .loop {
    font-size: 1em;
    margin-top: 1em;
  }

  @media screen and (max-width: 520px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

const Algi = styled.div`
  text-align: justify;
  font-size: 2em;
  letter-spacing: 0.1em;
  margin: 1.25em;

  @media screen and (max-width: 520px) {
    font-size: 1.5em;
  }
`;

const Desc = styled.div`
  font-size: 1.25em;
  width: 50%;
  margin: 1em;

  @media screen and (max-width: 520px) {
    font-size: 1em;
    width: 85%;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5em;

  a {
    margin: 1em;
    color: #00a8ff;
  }
`;

export default HomeComponent;

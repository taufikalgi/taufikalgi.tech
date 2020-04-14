import React from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import { Link, scroller } from "react-scroll";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Links>
          <Link className="without-border">
            <img src={Icon} alt="icon" />
          </Link>
        </Links>
        <Links>
          <Link>Home</Link>
          <Link>Educations</Link>
          <Link>Experiences</Link>
          <Link>Project</Link>
          <Link>Organizations</Link>
          <Link>About</Link>
        </Links>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  align-items: center;
  color: black;

  background-color: white;
  transition: 1s;
  -webkit-transition: 1s;

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #00a8ff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  a {
    position: relative;
    margin: 0.5rem;
    margin-right: 1rem;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-family: inherit;
  }

  .without-border {
    border: none;
  }
  .without-border:before {
    display: none;
  }

  img {
    height: 30px;
    width: 30px;
    object-fit: scale-down;
    cursor: pointer;
    margin 10px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export default Navbar;

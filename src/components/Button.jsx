'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import styled from 'styled-components';

const Button = ({setSelectedLink}) => {
   const handleClick = (e) => {
        e.preventDefault();

        setSelectedLink("#projects");

        document.querySelector("#projects").scrollIntoView({
            behavior: 'smooth'
        });
    };
  return (
    <StyledWrapper>
      <Link href={"#projects"} className="button flex items-center justify-center" onClick={handleClick}> 
        See my work
        <FaArrowRight className="ml-2 transform -rotate-45" />
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --green: #161A31;
    align-items: center;
    font-size: 15px;
    padding: 1em 2.9em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    background: linear-gradient(45deg, #161A31 0%, transparent 40%,transparent 60% , #06091F 100%);
    color: #efefef;
    display: flex;
    box-shadow: inset 0 0 10px #161A31, 0 0 9px 3px #06091F;
  }
// set the colors as above
  .button:hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px #161A31, 0 0 9px 3px #06091F;
  }

  .button:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform .4s ease-in-out;
    background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
  }

  .button:hover:before {
    transform: translateX(15em);
  }`;

export default Button;

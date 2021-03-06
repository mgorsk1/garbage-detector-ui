import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  .a {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }
`;

const Dashboard = (props: any) => (
  <Svg
    width={32}
    height={32}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className="a"
      d="M10.5,12.526a.978.978,0,0,1-.975.98h-7.8a.977.977,0,0,1-.975-.98V1.736a.978.978,0,0,1,.976-.98l7.8.013a.978.978,0,0,1,.974.98Z"
    />
    <path
      className="a"
      d="M23.246,6.544a.969.969,0,0,1-.975.962h-7.8a.968.968,0,0,1-.975-.962V1.731a.968.968,0,0,1,.973-.962l7.8-.013a.97.97,0,0,1,.977.962Z"
    />
    <path
      className="a"
      d="M10.5,22.291a.971.971,0,0,1-.977.965l-7.8-.013a.969.969,0,0,1-.973-.964V17.47a.969.969,0,0,1,.975-.964h7.8a.97.97,0,0,1,.975.964Z"
    />
    <path
      className="a"
      d="M14.472,23.256a.978.978,0,0,1-.976-.981V11.487a.978.978,0,0,1,.975-.981h7.8a.978.978,0,0,1,.975.981V22.262a.979.979,0,0,1-.974.981Z"
    />
  </Svg>
);

export default Dashboard;

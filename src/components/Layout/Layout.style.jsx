import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.ul`
height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  background-color: #2e3035;
`;

export const PagesLink = styled.li`
  color: #707073;
  list-style: none;
`;


export const StyleLink = styled(NavLink)`
padding: 5px;
  color: #707073;
  text-decoration: none;
  font-size: 24px;
  border: 5px solid #2e3035;
  border-radius: 10px;
&.active{
    color:#005eff;
}
`;
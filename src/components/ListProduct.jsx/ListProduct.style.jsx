import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.ul`
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 30px;
`;

export const Card = styled.li`
  position: relative;
  padding: 15px;
  width: 300px;
  height: 200px;
  box-shadow: 0 0 50px #cacfc4;
  border-radius: 10px;
`;

export const DescriptionText = styled.p`
    width: 100%;
`

export const IdText = styled.p`
  margin: 20px 0;
  color: grey;

`;

export const Wrap = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
  width: 270px;
`;

export const Price = styled.p`
  display: block;
  width: 50%;
  font-weight: bold;
`;

export const Btn = styled(Link)`
  width: 50%;
  color: blue;
  border: none;
  border-radius: 5px;
  text-decoration: none;

`;

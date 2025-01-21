import { Link } from "react-router-dom";
import styled from "styled-components";

export const BarbeirosStyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
`;

export const BarbeiroBotaoAdd = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

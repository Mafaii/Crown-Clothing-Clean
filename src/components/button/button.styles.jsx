import { styled } from "styled-components";

export const DefaultButton = styled.button`
  padding: 1em;
  margin: 1em;
  margin-left: 0;
  font-size: 0.9em;
  background: none;
  border: 1px solid black;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const InvertedButton = styled(DefaultButton)`
  background: black;
  border: 1px solid black;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.411);
    color: black;
  }
`;
export const GoogleButton = styled(DefaultButton)`
  background: rgb(100, 194, 222);
  border: 1px solid rgb(21, 111, 142);
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: rgb(21, 111, 142);
  }
`;

import { styled } from "styled-components";

export const SignInOutContainer = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  padding: 1em 2rem;
  gap: 1em;
  h2 {
    color: rgba(0, 0, 0, 0.6);
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    &SignInOutSeparator {
      display: none;
    }
  }
`;
export const SignInOutSeparator = styled.div`
  height: 80vh;
  width: 0;
  border-left: 2px solid rgba(0, 0, 0, 0.4);
  margin: 0 1em;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

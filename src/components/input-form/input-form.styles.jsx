import { styled } from "styled-components";

export const InputContainer = styled.div`
    margin: 1em 0;
    label {
        display: block;
        margin-bottom: 1em;
    }
    input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 45px;
        font-size: 1.1em;
        &:focus-visible {
            outline: rgba(4, 138, 138, 0.676) double 2px;
            outline-offset: 2px;
        }
    }
`


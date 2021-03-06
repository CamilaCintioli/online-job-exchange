import styled from "styled-components";

interface InputProps {

}

const Input = styled.input<InputProps>`
    display: block;
    max-width: 100vw;
    padding: 0.5em;
    font-size: 16px;
    border-radius: 7px;
`;

export default Input;

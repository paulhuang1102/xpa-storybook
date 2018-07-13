import styled from 'styled-components';

export const WGinput = styled.input`
    border-radius: 2px;
    border: solid 1px #8a8a8a;
    background-color: transparent;
    outline: none;
    color: #8a8a8a;
    padding: 3px .5rem;

    &:focus
    {
        border-color: #d9d9d9;
        color: #ab4af2;
        -webkit-text-fill-color: #d9d9d9;
    }
`;
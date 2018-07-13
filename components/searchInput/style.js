import styled from 'styled-components';

export const SCinutContainer = styled.div`
    position: relative;
    display: inline-block;

    > img
    {
        position: absolute;
        width: 1rem;
        height: 1rem;
        right: .5rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
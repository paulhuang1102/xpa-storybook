import styled from 'styled-components';

export const SCcontrolContainer = styled.div`
    position: relative;
    display: inline-block;
    ${(props) => props.h ? `line-height: ${props.h};` : ''}
    
    > div
    {
        line-height: initial;
    }

    > div:last-child
    {
        position: absolute;
        right: 0;
        top: ${(props) => props.h};
    }
`

export const SCcontrol = styled.div`
    color: #7166fc;
    min-width: ${props => props.mw};
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > p
    {
        margin: 0;
        margin-right: .5rem;
    }

    > img
    {
        width: 1rem;
        height: 1rem;
    }
`
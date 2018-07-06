import styled from 'styled-components';

export const SCtoggleContainer = styled.div`
    border-radius: 2px;
    background-color: ${props => (props.bgc ?  props.bgc : '#0a1229')};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
    display: inline-block;
    color: #8a8a8a;

    > div
    {
        cursor: pointer;
        padding: 0.25rem 1rem;

        &:last-child
        {
            margin-bottom: 0;
        }

        &:hover
        {
            background-color: #000;
            color: #7166fc;
        }
    }
`
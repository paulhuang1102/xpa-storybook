import styled from 'styled-components';

export const WGbutton = styled.button`
    padding: 7px 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    transition: .1s;

    ${(props) => {
        switch (props.type)
        {
            case 'primary':
                return 'background-image: linear-gradient(292deg, #7166fc, #ab4af2)';
            case 'secondary':
                return 'background-color: transparent';
            default:
                return '';
        }
    }};
    border: ${(props) => {
        switch (props.type)
        {
            case 'secondary':
                return 'solid 1px #7166fc';
            default:
                return 0;
        }
    }};
    color: ${(props) => {
        switch (props.type)
        {
            case 'secondary':
                return '#7166fc';
            default:
                return '#fff';
        }
    }};

    &:hover, &:active
    {
        ${(props) => {
            switch(props.type) {
                case 'primary':
                    return `
                        background-image: linear-gradient(292deg, #4032f3, #9822ee);
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
                    `;
                case 'secondary':
                    return `
                        background-color: #7166fc;
                        color: #000;
                    `;
                default:
                    return '';
            }
        }}
    }

    &:disabled
    {
        ${(props) =>
        {
           switch(props.type)
           {
                case 'primary':
                    return `
                        background-color: #4a4a4a;
                        background-image: initial;
                        color: #8a8a8a
                    `
                case 'secondary':
                    return `
                        background-color: transparent;
                        color: #4a4a4a;
                        border: solid 1px #4a4a4a;
                    `
           }
        }}
    }
`;

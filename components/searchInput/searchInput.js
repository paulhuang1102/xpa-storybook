import React from 'react';
import { WGinput } from '../../widgets/input';
import { SCinutContainer } from './style';

class searchInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <SCinutContainer>
                <WGinput />
                <img src="/static/icon/ic-search.svg" alt="search"/>
            </SCinutContainer>
        );
    }
}

export default searchInput;
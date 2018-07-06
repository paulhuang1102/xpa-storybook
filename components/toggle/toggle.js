import React from 'react';
import PropTypes from 'prop-types'
import { SCtoggleContainer } from './style';

class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    renderList()
    {
        return this.props.list.map((l, i) => (
            <div key={i}>{l}</div>
        ));
    }

    render()
    {
        return (
            <SCtoggleContainer bgc={this.props.bgc}>
                {this.renderList()}
            </SCtoggleContainer>
        );
    }   
}

Toggle.defaultProps = {
    bgc: ''
}

Toggle.propTypes = {
    bgc: PropTypes.string
}

export default Toggle;
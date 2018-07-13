import React from 'react';
import PropTypes from 'prop-types'
import { SCtoggleContainer, SCtoggleList } from './style';

class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selected: props.selected
        }
    }

    renderList()
    {
        const { list, action } = this.props;
        const { selected } = this.state;
        return list.map((item, i) => (
            <SCtoggleList
                key={i}
                selected={selected === i}
                onClick={() =>
                {
                    action(item);
                    this.setState({
                        selected: i
                    });
                }
            }>
                {item}
            </SCtoggleList>
        ));
    }

    render()
    {
        const { bgc, active, list } = this.props;
        return (
            <SCtoggleContainer bgc={bgc} active={active} length={list.length}>
                {this.renderList()}
            </SCtoggleContainer>
        );
    }   
}

Toggle.defaultProps = {
    bgc: '',
    selected: -1,
    active: true
}

Toggle.propTypes = {
    bgc: PropTypes.string,
    selected: PropTypes.number,
    active: PropTypes.bool
}

export default Toggle;
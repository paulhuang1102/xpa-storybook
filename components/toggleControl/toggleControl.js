import React from 'react';
import { SCcontrolContainer, SCcontrol } from './style';
import Toggle from '../toggle/toggle';

class ToggleControl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value: 'Select...',
            toggle: false
        }
    }

    openToggle = () => {
        this.setState((prevState) =>
        {
            this.setState({
                ...prevState,
                toggle: !prevState.toggle
            });
        });
    }

    select = (value) =>
    {
        this.setState((prevState) =>
        {
            this.setState({
                ...prevState,
                value,
                toggle: false
            });
        });
    }

    render()
    {
        const holderHeight = '1.5rem';
        const minWidth = '100px';
        const { toggle } = this.state;

        return (
            <SCcontrolContainer h={holderHeight}>
                <SCcontrol mw={minWidth} onClick={this.openToggle}>
                    <p>{this.state.value}</p>
                    <img src="static/icon/ic-dropdown.svg" alt="dropdown"/>
                </SCcontrol>
                {this.props.children({ action: this.select, toggle })}
            </SCcontrolContainer>
        );
    }
}

export default ToggleControl;
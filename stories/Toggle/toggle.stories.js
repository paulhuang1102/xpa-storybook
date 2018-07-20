import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs/react';
import Toggle from '../../components/toggle/toggle';
import ToggleControl from '../../components/toggleControl/toggleControl';

const selected = 1;
const list = [
    'First',
    'Second',
    'Third'
]

const defaultProps = {
    list,
    active: true
}

storiesOf('Toggle', module)
    .addDecorator(withKnobs)
    .add('simple', () => {
        const items = array('Items', list, ',');
        const toggleProps = {...defaultProps, list: items};
        return (<Toggle {...toggleProps} />);
    })
    .add('withSelected', () => {
        const items = array('Items', list, ',');
        const toggleProps = {...defaultProps, list: items};
        return (<Toggle {...toggleProps} selected={selected} />);
    })
    .add('withControl', () => {
        const items = array('Items', list, ',');
        return (
            <ToggleControl>
                {(props) => <Toggle list={items} active={props.toggle} action={props.action} />}
            </ToggleControl>
        )
    });

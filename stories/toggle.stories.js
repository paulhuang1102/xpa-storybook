import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../components/toggle/toggle';
import ToggleControl from '../components/toggleControl/toggleControl';

const list = [
    'First',
    'Second',
    'Third'
]

const selected = 1;

const toggleProps = {
    list,
    active: true
}

storiesOf('Toggle', module)
    .add('simple', () => <Toggle {...toggleProps} />)
    .add('withSelected', () => <Toggle {...toggleProps} selected={selected} />)
    .add('withControl', () => (
        <ToggleControl>
            {(props) => <Toggle list={list} active={props.toggle} action={props.action} />}
        </ToggleControl>
    ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../components/toggle/toggle';

const list = [
    'First',
    'Second',
    'Third'
]

const selected = 2;

const toggleProps = {
    list,
    selected
}

storiesOf('Toggle', module)
    .add('normal', () => <Toggle {...toggleProps} />)

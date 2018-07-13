import React from 'react';
import { storiesOf } from '@storybook/react';
import { WGinput } from '../widgets/input';
import SearchInput from '../components/searchInput/searchInput';

storiesOf('Input', module)
    .add('simple', () => <WGinput />)
    .add('withSearch', () => <SearchInput />)
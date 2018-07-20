import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { WGinput } from '../../widgets/input';
import SearchInput from '../../components/searchInput/searchInput';

storiesOf('Input', module)
    .add('simple', () => <WGinput />)
    .add('withSearch', withNotes('hi')(() => <SearchInput search={action({
        depth: 1
      })}/>))
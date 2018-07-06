import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { WGbutton } from '../widgets/button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('primary', () => <WGbutton type="primary" onClick={action('on-click')}>Button</WGbutton>)
  .add('primary disabled', () => <WGbutton type="primary" disabled>Button</WGbutton>)
  .add('secondary', () => <WGbutton type="secondary">Button</WGbutton>)
  .add('secondary disabled', () => <WGbutton type="secondary" disabled>Button</WGbutton>);

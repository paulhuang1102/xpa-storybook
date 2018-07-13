import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WGbutton } from '../widgets/button';

storiesOf('Button', module)
  .add('primary', () => <WGbutton type="primary" onClick={action('on-click')}>Button</WGbutton>)
  .add('primary disabled', () => <WGbutton type="primary" disabled>Button</WGbutton>)
  .add('secondary', () => <WGbutton type="secondary">Button</WGbutton>)
  .add('secondary disabled', () => <WGbutton type="secondary" disabled>Button</WGbutton>);

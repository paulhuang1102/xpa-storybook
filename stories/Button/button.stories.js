import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';

import { WGbutton } from '../../widgets/button';
import results from '../../.jest-test-results.json';

console.log(results);

storiesOf('Button', module)
  .addDecorator(withTests({ results }))
  .add('primary', () => <WGbutton type="primary" onClick={action('on-click')}>Button</WGbutton>, { jest: 'button.test.js' })
  .add('primary disabled', () => <WGbutton type="primary" disabled>Button</WGbutton>)
  .add('secondary', () => <WGbutton type="secondary">Button</WGbutton>)
  .add('secondary disabled', () => <WGbutton type="secondary" disabled>Button</WGbutton>);

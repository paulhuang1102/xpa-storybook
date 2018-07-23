import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { WGbutton } from '../../widgets/button';
describe('Button', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <WGbutton>Button</WGbutton>
        );

        expect(wrapper.text()).toBe('Button');
    })
   
})

it('Failing test', () => {
    expect('a').toEqual('a');
})
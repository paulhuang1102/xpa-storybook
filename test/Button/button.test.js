import React from 'react';
import renderer from 'react-test-renderer';
import { WGbutton } from '../../widgets/button';
describe('Button', () => {
    it('should render correctly', () => {
         const render = renderer.create(
            <WGbutton>Click</ WGbutton>
        );

        expect(render.toJSON()).toMatchSnapshot();
    })
   
})
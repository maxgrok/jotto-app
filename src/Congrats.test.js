import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import findByTestAttr from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });


/**
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
} 

test('renders without error', () =>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1);
})

test('renders no text when `success` prop is false', ()=>{
    const wrapper = setup({success: false})
    
})

test('renders non-empty congrats message when `success` prop is true', ()=>{

})
import React from 'react';
/**
 * 
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}
export default findByTestAttr;
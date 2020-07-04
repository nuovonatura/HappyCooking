import React from 'react';
import Login from "../../src/pages/Login";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});
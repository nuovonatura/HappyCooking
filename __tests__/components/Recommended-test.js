import React from 'react';
import Recommended from "../../src/components/Recommended";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Recommended />).toJSON();
    expect(tree).toMatchSnapshot();
});
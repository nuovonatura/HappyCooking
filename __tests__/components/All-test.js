import React from 'react';
import All from "../../src/components/All";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<All />).toJSON();
    expect(tree).toMatchSnapshot();
});
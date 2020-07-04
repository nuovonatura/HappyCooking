import React from 'react';
import Setting from "../../src/pages/Setting";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Setting />).toJSON();
    expect(tree).toMatchSnapshot();
});
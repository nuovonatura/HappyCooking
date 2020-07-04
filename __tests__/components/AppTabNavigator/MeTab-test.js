import React from 'react';
import MeTab from "../../../src/components/AppTabNavigator/MeTab";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<MeTab />).toJSON();
    expect(tree).toMatchSnapshot();
});
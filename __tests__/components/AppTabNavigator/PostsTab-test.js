import React from 'react';
import PostsTab from "../../../src/components/AppTabNavigator/PostsTab";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<PostsTab />).toJSON();
    expect(tree).toMatchSnapshot();
});
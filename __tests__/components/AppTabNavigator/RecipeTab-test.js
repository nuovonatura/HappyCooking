import React from 'react';
import RecipeTab from "../../../src/components/AppTabNavigator/RecipeTab";

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<RecipeTab />).toJSON();
    expect(tree).toMatchSnapshot();
});
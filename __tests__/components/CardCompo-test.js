import React from 'react';
import CardCompo from "../../src/components/CardCompo";


import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<CardCompo />).toJSON();
    expect(tree).toMatchSnapshot();
});
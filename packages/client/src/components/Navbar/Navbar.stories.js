import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar.component,
};

const Template = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});

Basic.args = {};

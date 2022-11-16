import React, { Component } from 'react';
import { RoundedImage } from './RoundedImage.component';

export default {
  title: 'Example/RoundedImage',
  component: RoundedImage.component,
};

const Template = (args) => <RoundedImage {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  src: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  alt: 'Peas',
};

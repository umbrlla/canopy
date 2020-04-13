import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '../components/Checkbox/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox
};

export const Text = () => {
  return (
    <Checkbox
      value="Computer Science"
      onChange={action("Checked!")}
    />
  )
}

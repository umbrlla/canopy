import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => {
  return (
    <Button
      type="primary"
      value="Button"
      onClick={action("Clicked!")}
    />
  )
}

export const Secondary = () => {
  return (
    <Button
      type="secondary"
      value="Button"
      onClick={action("Clicked!")}
    />
  )
}

export const PrimaryOutline = () => {
  return (
    <Button
      type="primary-outline"
      value="Button"
      onClick={action("Clicked!")}
    />
  )
}

export const SecondaryOutline = () => {
  return (
    <Button
      type="secondary-outline"
      value="Button"
      onClick={action("Clicked!")}
    />
  )
}
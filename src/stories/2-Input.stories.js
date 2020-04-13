import React from 'react';
import { Input } from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => {
  return (
    <Input
      type="text"
    />
  )
}

export const Password = () => {
  return (
    <Input
      type="password"
    />
  )
}

export const PlaceHolder = () => {
  return (
    <Input
      type="text"
      placeholder="Search..."
    />
  )
}

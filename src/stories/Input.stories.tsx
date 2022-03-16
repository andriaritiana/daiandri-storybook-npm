import React from 'react';
import { Input } from "../components/Input";

export default {
  title: 'Components/Input',
  component: Input,
};


export const Default = () => <Input placeholder="default" />;
export const FullWidth = () => <Input fullWidth placeholder="full width" />;
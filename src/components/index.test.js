import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input component', () => {
  it('renders input', () => {
    const component = shallow(
      <Input />
    )
    expect(component.exists('input')).toBe(true);
  });

  it('renders input with given value', () => {
		const value = 'hellotest'
		const component = shallow(
      <Input value={value} />
    );
    expect(component.find('input').props().value).toEqual(value)
  });

  it('calls onChange handler with a new value', () => {
    const value = 'hellotest';
    const newValue = 'new value';
    const onChange = jest.fn();

    const component = shallow(
      <Input
        value={value}
        onChange={onChange}
      />
    )
    const e = { target: { value: newValue } };
    component.find('input').simulate('change', e);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(newValue);
  });
});


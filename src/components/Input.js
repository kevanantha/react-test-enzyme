import React from 'react';

class Input extends React.Component {
  onChange = (e) => {
    const { onChange } = this.props;
    const { value } = e.target;

    if (onChange) onChange(value)
  }

  render() {
    const { value } = this.props;
    return (
      <input
        value={value}
        onChange={this.onChange}
      />
    )
  }
}

export default Input;

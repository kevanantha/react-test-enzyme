import React from 'react';

class Input extends React.Component {
  onChange = (e) => {
    const { onChange, disabled } = this.props;
    const { value } = e.target;

    if (!disabled && onChange) onChange(value)
  }

  render() {
    const {
      value,
      error,
      disabled,
    } = this.props;

    let className = '';
    if (error) {
      className += 'error'
    }
    if (disabled) {
      className += 'disabled'
    }

    return (
      <input
        value={value}
        onChange={this.onChange}
        className={className}
      />
    )
  }
}

export default Input;

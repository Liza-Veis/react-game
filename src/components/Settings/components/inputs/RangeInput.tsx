import React from 'react';

type Props = {
  name: string;
  value: number;
  label: string;
};

const RangeInput: React.FC<Props> = ({ name, value, label }: Props) => {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label>
      {label}
      <input
        type="range"
        name={name}
        min="0"
        max="1"
        step="0.1"
        defaultValue={value}
      />
    </label>
  );
};

export default RangeInput;

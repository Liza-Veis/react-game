import React from 'react';

type Props = {
  name: string;
  value: string;
  checked: boolean;
  label: string;
};

const RadioInput: React.FC<Props> = ({
  name,
  value,
  checked,
  label,
}: Props) => {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label>
      <input type="radio" name={name} value={value} defaultChecked={checked} />
      {label}
    </label>
  );
};

export default RadioInput;

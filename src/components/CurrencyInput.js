import React from 'react';

const CurrencyInput = ({ value, onChange }) => (
  <input type="number" value={value} onChange={onChange} />
);

export default CurrencyInput;

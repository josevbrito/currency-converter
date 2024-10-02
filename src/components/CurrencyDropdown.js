import React from 'react';

const CurrencyDropdown = ({ currencies, selectedCurrency, onChange }) => (
  <select value={selectedCurrency} onChange={onChange}>
    {Object.keys(currencies).map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

export default CurrencyDropdown;

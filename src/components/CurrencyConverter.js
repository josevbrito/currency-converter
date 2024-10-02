import React, { useState } from 'react';
import useExchangeRates from '../hooks/useExchangeRates';
import CurrencyInput from './CurrencyInput';
import CurrencyDropdown from './CurrencyDropdown';

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const { rates, loading, error } = useExchangeRates(baseCurrency);

  const convertedAmount = amount * (rates[targetCurrency] || 0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput value={amount} onChange={(e) => setAmount(e.target.value)} />
      <CurrencyDropdown currencies={rates} selectedCurrency={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} />
      <CurrencyDropdown currencies={rates} selectedCurrency={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} />
      <h2>
        {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
      </h2>
    </div>
  );
};

export default CurrencyConverter;

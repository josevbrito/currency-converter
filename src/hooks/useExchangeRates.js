import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRates = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY; // Access the API key from .env
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
        setRates(response.data.conversion_rates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading, error };
};

export default useExchangeRates;

# Currency Converter

A simple currency converter application built with React, utilizing the ExchangeRate-API to fetch real-time exchange rates.

## Features

- Convert between different currencies.
- Intuitive interface for inputting values and selecting currencies.
- Automatic updates of exchange rates.

## Technologies Used

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [ExchangeRate-API](https://www.exchangerate-api.com/)

## Project Structure

```
currency-converter/
  ├── public/
  │ ├── index.html
  │ └── ...
  ├── src/
  │ ├── components/
  │ │ ├── CurrencyConverter.js
  │ │ ├── CurrencyInput.js
  │ │ └── CurrencyDropdown.js
  │ ├── hooks/
  │ │ └── useExchangeRates.js
  │ ├── App.js
  │ ├── App.css
  │ ├── index.js
  │ ├── index.css
  │ └── reportWebVitals.css
  ├── package-lock.json
  └── package.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add your API key:
   ```plaintext
   REACT_APP_API_KEY=YOUR_API_KEY
   ```
   
4. Start the development server:
   ```bash
   npm start
   ```

5. Access the application in your browser at http://localhost:3000.

## Usage

1. Enter a value in the input field.
2. Select the source currency and target currency from the dropdown menus.
3. The converted value will be displayed automatically.

## Contributions

Feel free to submit pull requests or open issues for improvements and fixes!

## License

This project is licensed under the MIT License.


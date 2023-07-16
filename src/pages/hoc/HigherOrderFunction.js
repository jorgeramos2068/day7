// Resources and references:
// https://www.smashingmagazine.com/2020/06/higher-order-components-react/

import { useEffect } from 'react';

// const formatCurrency = function (currencySymbol, decimalSeparator) {
//   return function (value) {
//     const wholePart = parseInt(value);
//     const fractionalPart = value.toString().split('.')[1];
//     return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
//   };
// };

const HigherOrderFunction = () => {
  useEffect(() => {}, []);

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">Higher Order Functions</h1>
      </div>
      <div className="mb-4">
        <h4>Please, check the console.</h4>
      </div>
    </section>
  );
};

export { HigherOrderFunction };
export default HigherOrderFunction;

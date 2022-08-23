// Resources and references:
// https://www.smashingmagazine.com/2020/06/higher-order-components-react/

import { useEffect, useState } from 'react';
import List from './List';

const HigherOrderComponent = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRecords([
        { id: 1, superhero: 'Superman' },
        { id: 2, superhero: 'Wonder Woman' },
        { id: 3, superhero: 'Batman' },
        { id: 4, superhero: 'Spiderman' },
      ]);
    }, 5000);
  }, []);

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">Higher Order Component</h1>
      </div>
      <div className="mb-4">
        <List records={records} />
      </div>
    </section>
  );
};

export { HigherOrderComponent };
export default HigherOrderComponent;

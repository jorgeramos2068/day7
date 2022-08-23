import { useState } from 'react';

function internalProcess(total) {
  const localTotal = total * 2;
  for (let i = 0; i < localTotal; i++) {
    console.log('Printed!!!');
  }
  return localTotal;
}

const UseMemo = () => {
  const [counter, setCounter] = useState(1000);
  const [show, setShow] = useState(true);

  const handleIncrease = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleShow = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">useMemo</h1>
      </div>
      <div className="mb-4">
        <h4>Counter: {counter}</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrease}
        >
          +1
        </button>
        <div className="alert alert-primary mt-4" role="alert">
          Result of the process: {internalProcess(counter)}
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleShow}>
          Show / Hide
        </button>
        {show && (
          <div className="alert alert-warning mt-4" role="alert">
            Try to hide me
          </div>
        )}
      </div>
    </section>
  );
};

export { UseMemo };
export default UseMemo;

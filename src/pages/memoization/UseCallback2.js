// import { useState } from 'react';
import UseCallback2Child from './UseCallback2Child';

const UseCallback2 = () => {
  // const [show, setShow] = useState(true);

  const deleteMe = () => {
    console.log('Deleted!!!');
  };

  // const handleShow = () => {
  //   setShow(prevShow => !prevShow);
  // };

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">useCallback 1</h1>
      </div>
      <div className="mb-4">
        <h4>Children:</h4>
        <div className="mb-2">
          <UseCallback2Child deleteMe={deleteMe} />
        </div>
        <div className="mb-2">
          <UseCallback2Child deleteMe={deleteMe} />
        </div>
        <div className="mb-2">
          <UseCallback2Child deleteMe={deleteMe} />
        </div>
        <div className="mb-2">
          <UseCallback2Child deleteMe={deleteMe} />
        </div>
      </div>
      {/* <div>
        <button type="button" className="btn btn-primary" onClick={handleShow}>
          Show / Hide
        </button>
        {show && (
          <div className="alert alert-warning mt-4" role="alert">
            Try to hide me
          </div>
        )}
      </div> */}
    </section>
  );
};

export { UseCallback2 };
export default UseCallback2;

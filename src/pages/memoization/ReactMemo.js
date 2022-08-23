import { useState } from 'react';
import ReactMemoTitle from './ReactMemoTitle';

const ReactMemo = () => {
  const [title, setTitle] = useState('Batman');
  // const [show, setShow] = useState(true);

  const handleChangeName = () => {
    setTitle(prevTitle => (prevTitle !== 'Batman' ? 'Batman' : 'Robin'));
  };

  // const handleShow = () => {
  //   setShow(prevShow => !prevShow);
  // };

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">React.memo()</h1>
      </div>
      <div className="mb-4">
        <h4>
          Welcome <ReactMemoTitle title={title} />
        </h4>
        <button className="btn btn-primary" onClick={handleChangeName}>
          Change name
        </button>
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

export { ReactMemo };
export default ReactMemo;

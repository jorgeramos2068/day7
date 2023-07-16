// import { useEffect, useState } from 'react';

const UseCallback1 = () => {
  // const [data, setData] = useState(1);

  // const anyProcess = () => {
  //   console.log('anyProcess executed', data);
  //   setData(prevData => prevData + 1);
  // };

  // useEffect(() => {
  //   anyProcess();
  // }, []);

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">useCallback</h1>
      </div>
      <div className="mb-4">{/* <h4>Data: {data}</h4> */}</div>
    </section>
  );
};

export { UseCallback1 };
export default UseCallback1;

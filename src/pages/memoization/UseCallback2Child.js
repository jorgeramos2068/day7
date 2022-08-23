const UseCallback2Child = ({ deleteMe }) => {
  console.log('I have rendered');

  const handleClick = () => {
    deleteMe();
  };

  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Delete this child
    </button>
  );
};

export { UseCallback2Child };
export default UseCallback2Child;

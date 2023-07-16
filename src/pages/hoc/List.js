const List = props => {
  const { records } = props;

  if (!records) {
    return null;
  }

  if (!records.length) {
    return <p>No records:(</p>;
  }

  return (
    <>
      <div className="mb-4">
        <h4>List of Superheroes</h4>
      </div>
      <ul className="list-group">
        {records.map(record => (
          <li className="list-group-item" key={record.id}>
            {record.superhero}
          </li>
        ))}
      </ul>
    </>
  );
};

export { List };
export default List;

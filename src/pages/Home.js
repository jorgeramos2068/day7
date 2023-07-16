import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Topic</th>
          <th scope="col">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Higher Order Components</td>
          <td>
            <ul>
              <li>
                <Link to="/hoc/regular">Regular component</Link>
              </li>
              <li>
                <Link to="/hoc/hoc">HOC</Link>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Memoize Components</td>
          <td>
            <ul>
              <li>
                <Link to="/memoization/use-memo">useMemo hook</Link>
              </li>
              <li>
                <Link to="/memoization/use-callback">useCallback hook</Link>
              </li>
              <li>
                <Link to="/memoization/react-memo">React.memo()</Link>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Synthetic Events</td>
          <td>
            <ul>
              <li>
                <Link to="/synthetic/synthetic-events">Synthetic Events</Link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { Home };
export default Home;

import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";

function EffectApi() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAndHandle = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAndHandle();
  }, []);

  return (
    <div>
      <h1>Effect API</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EffectApi;

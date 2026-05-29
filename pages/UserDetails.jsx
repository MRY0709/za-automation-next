import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchUser } from "../services/api";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const data = await fetchUser(id);

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="details-page">
      <div className="details-card">
        <h1>{user.name}</h1>

        <div className="details-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Website:</strong> {user.website}
          </p>

          <p>
            <strong>Company:</strong> {user.company.name}
          </p>

          <p>
            <strong>City:</strong> {user.address.city}
          </p>

          <p>
            <strong>Street:</strong> {user.address.street}
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;

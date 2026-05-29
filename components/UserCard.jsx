import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <p>{user.phone}</p>

      <Link to={`/user/${user.id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
}

export default UserCard;

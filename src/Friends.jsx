import "./friend.css";
export default function Friend({ friend }) {
  let { name, email, phone } = friend;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Email: {phone}</p>
    </div>
  );
}

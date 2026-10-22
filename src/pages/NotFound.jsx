import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-5 text-center">
      <h1>GAME OVER - 404</h1>
      <Link to="/">Back to start</Link>
    </div>
  );
}
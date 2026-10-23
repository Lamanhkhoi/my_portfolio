import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h2>Project #{id}</h2>
      <button onClick={() => navigate("/#projects")}>Back</button>
    </div>
  );
}
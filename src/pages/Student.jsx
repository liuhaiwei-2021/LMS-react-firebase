//NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Project file
import { readDocument } from "../scripts/fireStore";
import "../styles/Course.css";

export default function Student() {
  //properties
  const { id } = useParams();
  const navigate = useNavigate();

  // Local state
  const [student, setStudent] = useState({});

  // Methods
  useEffect(() => {
    async function loadData() {
      const payload = await readDocument("users", id);
      const { data, error } = payload;
      error ? loadFail(data) : loadSucceed(data);
    }
    loadData();
  }, [id]);
  function loadSucceed(data) {
    setStudent(data);
  }

  function loadFail(data) {
    console.log(data);
  }

  const { name, avatar, email } = student;

  return (
    <div className="course container">
      <img className="course-img" src={avatar} alt="course-card" />
      <div className="course-info">
        <h3 className="course-title">{name}</h3>
        <p>Email: {email}</p>
      </div>
      <button onClick={() => navigate(-1)} className="go-back-btn">
        Go back
      </button>
    </div>
  );
}

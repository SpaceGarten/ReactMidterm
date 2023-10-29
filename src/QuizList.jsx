import React from "react";
import { Link } from "react-router-dom";

function QuizList() {
  return (
    <div>
      <h2>Quiz Questions</h2>
      <div>
        <Link to="/question/0">Take Quiz here</Link>
      </div>
    </div>
  );
}

export default QuizList;

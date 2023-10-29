// QuizList.js
import React from "react";
import { Link } from "react-router-dom";

function QuizList({ data }) {
  return (
    <div>
      <h2>Quiz Questions</h2>
      {data.map((question, index) => (
        <div key={index}>
          <Link to={`/question/${index}`}>Question {index + 1}</Link>
        </div>
      ))}
    </div>
  );
}

export default QuizList;

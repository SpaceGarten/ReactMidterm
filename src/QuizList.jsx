// QuizList.js
import React from "react";
import { Link } from "react-router-dom";

function QuizList({ data }) {
  return (
    <div>
      <h2>Quiz Questions</h2>
      <ul>
        {data.map((question, index) => (
          <li key={index}>
            <Link to={`/question/${index}`}>Question {index + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;

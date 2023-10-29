// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizList from "./QuizList";
import QuizQuestions from "./components/QuizQuestions";

function App() {
  const url = "https://quizapi.io/api/v1/questions?apiKey=ljR0HDZFJC0UGaKax8IxVPbilItcvCFWg8qHIAV9&limit=20";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1 style={{ color: "green" }}>Midterm</h1>
        <center>
          <Routes>
            <Route path="/" element={<QuizList data={data} />} />
            <Route path="/question/:index" element={<QuizQuestions data={data} />} />
          </Routes>
        </center>
      </div>
    </BrowserRouter>
  );
}

export default App;

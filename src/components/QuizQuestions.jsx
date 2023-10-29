import React, { useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Collapse } from "@mui/material";

function QuizQuestions({ data }) {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div>
      <h2>Quiz Questions</h2>
      {data.map((question, index) => {
        const correctAnswerKey = question.correct_answer;
        const correctAnswerText = question.answers[correctAnswerKey];
        const answers = Object.values(question.answers).filter((answer) => answer !== null);

        return (
          <Paper elevation={3} key={index} style={{ margin: "10px", padding: "10px", cursor: "pointer" }} onClick={() => handleExpand(index)}>
            <Typography variant="h6" style={{ color: "black" }}>
              Question {index + 1}: {question.question}
            </Typography>
            <Collapse in={expanded === index}>
              <Typography variant="body1" style={{ color: "black" }}>
                Answers:
                <List>
                  {answers.map((answer, answerIndex) => (
                    <ListItem key={answerIndex}>
                      <ListItemText primary={`Answer ${answerIndex + 1}: ${answer}`} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
              <Typography variant="body1" style={{ color: "black" }}>
                Correct Answer: {correctAnswerText}
              </Typography>
            </Collapse>
          </Paper>
        );
      })}
    </div>
  );
}

export default QuizQuestions;

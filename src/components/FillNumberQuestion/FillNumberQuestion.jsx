import React from "react";
import "./FillNumberQuestion.scss";

const FillNumberQuestion = ({
  question,
  handleQuestionChange,
  handleAnswerChange,
  handleAddAnswer,
  qIndex,
}) => {
  return (
    <div className="answer-group">
      <input
        className="answer-input"
        type="text"
        placeholder="Câu hỏi"
        value={question.content}
        onChange={(e) =>
          handleQuestionChange(qIndex, "content", e.target.value)
        }
      />
      <input
        className="correct-input"
        type="text"
        placeholder="Đáp án đúng"
        value={question.correct}
        onChange={(e) =>
          handleAnswerChange(qIndex, 0, "correct", e.target.value)
        }
      />
      <input
        className="image-input"
        type="text"
        placeholder="URL hình ảnh (nếu có)"
        value={question.image}
        onChange={(e) => handleQuestionChange(qIndex, "image", e.target.value)}
      />
      <input
        className="point-input"
        type="number"
        placeholder="Điểm"
        value={question.point}
        onChange={(e) => handleQuestionChange(qIndex, "point", e.target.value)}
      />
      <button
        className="add-answer-button"
        type="button"
        onClick={() =>
          handleAddAnswer(qIndex, {
            content: "",
            image: "",
            correct: false,
            point: 0,
          })
        }
      >
        Thêm Câu Trả Lời
      </button>
    </div>
  );
};

export default FillNumberQuestion;

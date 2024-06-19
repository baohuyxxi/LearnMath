import React from "react";
import "./FreeTextQuestion.scss";

const FreeTextQuestion = ({
  question,
  handleQuestionChange,
  handleAnswerChange,
  handleAddAnswer,
  qIndex,
}) => {
  return (
    <>
      {question.answers.map((answer, aIndex) => (
        <div key={aIndex} className="free-text-answer-group">
          <textarea
            className="free-text-answer-input"
            placeholder="Câu trả lời"
            value={answer.content}
            onChange={(e) =>
              handleAnswerChange(qIndex, aIndex, "content", e.target.value)
            }
          />
          <input
            className="free-text-image-input"
            type="text"
            placeholder="URL hình ảnh (nếu có)"
            value={answer.image}
            onChange={(e) =>
              handleAnswerChange(qIndex, aIndex, "image", e.target.value)
            }
          />
          <input
            className="free-text-point-input"
            type="number"
            placeholder="Điểm"
            value={answer.point}
            onChange={(e) =>
              handleAnswerChange(qIndex, aIndex, "point", e.target.value)
            }
          />
        </div>
      ))}
      <button
        className="free-text-add-answer-button"
        type="button"
        onClick={() =>
          handleAddAnswer(qIndex, {
            content: "",
            image: "",
            point: 0,
          })
        }
      >
        Thêm Câu Trả Lời
      </button>
    </>
  );
};

export default FreeTextQuestion;

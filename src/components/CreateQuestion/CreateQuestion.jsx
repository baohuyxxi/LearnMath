import React from "react";
import "./CreateQuestion.scss";
import ChoiceQuestion from "../ChoiceQuestion/ChoiceQuestion";

const CreateQuestion = ({
  question,
  handleQuestionChange,
  handleAnswerChange,
  handleAddAnswer,
  qIndex,
}) => {
  return (
    <div className="question-form-group">
      <label className="question-label">Câu {qIndex + 1}</label>
      <textarea
        className="question-textarea"
        placeholder="Nội dung câu hỏi"
        value={question.content}
        onChange={(e) => handleQuestionChange(qIndex, "content", e.target.value)}
      />
      <a>Loại câu hỏi</a>
      <select
        className="question-select"
        onChange={(e) => handleQuestionChange(qIndex, "typeQ", e.target.value)}
        value={question.typeQ}
      >
        <option value="CHOICE">Chọn đáp án đúng</option>
        <option value="FILL_NUMBER">Điền số</option>
        <option value="FREETEXT">Trả lời tự do</option>
      </select>

      {question.typeQ === "CHOICE" && (
        <ChoiceQuestion
          question={question}
          handleAnswerChange={handleAnswerChange}
          handleAddAnswer={handleAddAnswer}
          qIndex={qIndex}
        />
      )}

      {question.typeQ === "FILL_NUMBER" && (
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
            onChange={(e) =>
              handleQuestionChange(qIndex, "image", e.target.value)
            }
          />
          <input
            className="point-input"
            type="number"
            placeholder="Điểm"
            value={question.point}
            onChange={(e) =>
              handleQuestionChange(qIndex, "point", e.target.value)
            }
          />
        </div>
      )}

      {question.typeQ === "FREETEXT" && (
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
            onChange={(e) =>
              handleQuestionChange(qIndex, "image", e.target.value)
            }
          />
          <input
            className="point-input"
            type="number"
            placeholder="Điểm"
            value={question.point}
            onChange={(e) =>
              handleQuestionChange(qIndex, "point", e.target.value)
            }
          />
        </div>
      )}
    </div>
  );
};

export default CreateQuestion;
  
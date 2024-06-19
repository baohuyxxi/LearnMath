import React from "react";
import "./CreateQuestion.scss";
import ChoiceQuestion from "../ChoiceQuestion/ChoiceQuestion";
import FillNumberQuestion from "../FillNumberQuestion/FillNumberQuestion";
import FreeTextQuestion from "../FreeTextQuestion/FreeTextQuestion";

const CreateQuestion = ({
  question,
  handleQuestionChange,
  handleAnswerChange,
  handleAddAnswer,
  qIndex,
}) => {
  return (
    <div className="create-question">
      <label className="create-question__label">Câu {qIndex + 1}</label>
      <textarea
        className="create-question__textarea"
        placeholder="Nội dung câu hỏi"
        value={question.content}
        onChange={(e) =>
          handleQuestionChange(qIndex, "content", e.target.value)
        }
      />
      <div className="create-question__type">
        <span className="create-question__type-label">Loại câu hỏi</span>
        <select
          className="create-question__type-select"
          onChange={(e) => handleQuestionChange(qIndex, "typeQ", e.target.value)}
          value={question.typeQ}
        >
          <option value="CHOICE">Chọn đáp án đúng</option>
          <option value="FILL_NUMBER">Điền số</option>
          <option value="FREETEXT">Trả lời tự do</option>
        </select>
      </div>

      {question.typeQ === "CHOICE" && (
        <ChoiceQuestion
          question={question}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
          handleAddAnswer={handleAddAnswer}
          qIndex={qIndex}
        />
      )}

      {question.typeQ === "FILL_NUMBER" && (
        <FillNumberQuestion
          question={question}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
          handleAddAnswer={handleAddAnswer}
          qIndex={qIndex}
        />
      )}

      {question.typeQ === "FREETEXT" && (
        <FreeTextQuestion
          question={question}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
          handleAddAnswer={handleAddAnswer}
          qIndex={qIndex}
        />
      )}
    </div>
  );
};

export default CreateQuestion;

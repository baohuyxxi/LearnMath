import React from "react";
import "./ChoiceQuestion.scss";
import Radio from "../Radio/Radio";

const ChoiceQuestion = ({ question, handleAnswerChange, handleAddAnswer, qIndex }) => {
  const handleCorrectChange = (aIndex) => {
    const newAnswers = question.answers.map((answer, index) => ({
      ...answer,
      correct: index === aIndex,
    }));
    handleAnswerChange(qIndex, "answers", newAnswers);
  };

  const handleFileChange = (e, aIndex) => {

    const file = e.target.files[0]; 

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        handleAnswerChange(qIndex, aIndex, "image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <>
      {question.answers.map((answer, aIndex) => (
        <div key={aIndex} className="answer-group">
          <input
            className="answer-input"
            type="text"
            placeholder="Câu trả lời"
            value={answer.content}
            onChange={(e) =>
              handleAnswerChange(qIndex, aIndex, "content", e.target.value)
            }
          />
          {answer.image && <img src={answer.image} alt="Selected" className="selected-image" />}
          <input
            className="image-input"
            type="file"
            accept='image/*'
            onChange={(e) => handleFileChange(e, aIndex)}
            style={{ display: 'none' }}
            id={`file-input-${qIndex}-${aIndex}`}
          />
          <button
            type="button"
            onClick={() => document.getElementById(`file-input-${qIndex}-${aIndex}`).click()}
            className="image-button"
          >
            Thêm Hình Ảnh
          </button>
          <Radio
            id={`correct-${qIndex}-${aIndex}`}
            label="Đúng"
            checked={answer.correct}
            onChange={() => handleCorrectChange(aIndex)}
          />
          <input
            className="point-input"
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
    </>
  );
};

export default ChoiceQuestion;

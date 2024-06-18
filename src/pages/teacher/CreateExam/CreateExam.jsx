import React, { useState } from "react";
import TeacherAPI from "~/services/apis/TeacherAPI";
import FramePage from "~/components/FramePage/FramePage";
import CreateQuestion from "~/components/CreateQuestion/CreateQuestion";
import "./CreateExam.scss";

const CreateExam = () => {
  const [examData, setExamData] = useState({
    type: "LESSON",
    classId: "663c8a359fa46b05d8f8869d",
    chapterId: "663cac528cac1f4202cc04f4",
    lessonId: "663caca48cac1f4202cc04fc",
    name: "",
    description: "",
    time: 40,
    startTime: "",
    endTime: "",
    active: true,
    questions: [],
  });

  const addQuestion = () => {
    setExamData({
      ...examData,
      questions: [
        ...examData.questions,
        {
          sentenceNumber: examData.questions.length + 1,
          typeQ: "CHOICE",
          content: "",
          images: [""],
          answers: [{ content: "", correct: false, point: 0 }],
        },
      ],
    });
  };

  const handleQuestionChange = (index, key, value) => {
    const newQuestions = examData.questions.map((question, qIndex) => {
      if (index === qIndex) {
        return { ...question, [key]: value };
      }
      return question;
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const handleAnswerChange = (qIndex, aIndex, key, value) => {
    const newQuestions = examData.questions.map((question, questionIndex) => {
      if (questionIndex === qIndex) {
        const newAnswer = question.answers.map((answer, answerIndex) => {
          if (answerIndex === aIndex) {
            return { ...answer, [key]: value};
          }
          return answer;
        });
        return { ...question, answers: newAnswer };
      }
      return question;
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const handleAddAnswer = (qIndex, answer) => {
    const newQuestions = examData.questions.map((question, questionIndex) => {
      if (questionIndex === qIndex) {
        return {
          ...question,
          answers: [...question.answers, answer],
        };
      }
      return question;
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TeacherAPI.createExam(examData).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  return (
    <FramePage>
      <div className="create-exam">
        <div className="create-exam__container">
          <h1>Tạo Đề Thi</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Tên Đề Thi</label>
              <input
                type="text"
                id="name"
                name="name"
                value={examData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Mô Tả</label>
              <textarea
                id="description"
                name="description"
                value={examData.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Thời Gian</label>
              <input
                type="number"
                id="time"
                name="time"
                value={examData.time}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startTime">Thời Gian Bắt Đầu</label>
              <input
                type="datetime-local"
                id="startTime"
                name="startTime"
                value={examData.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">Thời Gian Kết Thúc</label>
              <input
                type="datetime-local"
                id="endTime"
                name="endTime"
                value={examData.endTime}
                onChange={handleChange}
              />
            </div>
            {examData.questions.map((question, qIndex) => (
              <CreateQuestion
                key={qIndex}
                question={question}
                handleQuestionChange={handleQuestionChange}
                handleAnswerChange={handleAnswerChange}
                handleAddAnswer={handleAddAnswer}
                qIndex={qIndex}
              />
            ))}
            <button type="button" onClick={addQuestion}>
              Thêm Câu Hỏi
            </button>
            <button type="submit">Tạo Đề Thi</button>
          </form>
        </div>
      </div>
    </FramePage>
  );
};

export default CreateExam;

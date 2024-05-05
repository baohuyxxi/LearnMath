import "./Exams.scss";
import * as React from "react";
import Table from "@mui/joy/Table";
import FramePage from "~/components/FramePage/FramePage";

export default function Exams() {
  // Dữ liệu giả định
  const examsData = [
    {
      level: "Lớp 2",
      exams: [
        {
          name: "Luyện thi Toán ViOlympic cấp quận lớp 2 - đề số 1",
          time: "20 phút",
          attempts: 175391,
          userAttempts: 0,
          highestScore: "N/A",
        },
        {
          name: "Luyện thi Toán ViOlympic cấp quận lớp 2 - đề số 2",
          time: "20 phút",
          attempts: 49370,
          userAttempts: 0,
          highestScore: "N/A",
        },
        // Các đề thi khác trong cùng cấp
      ],
    },
    {
      level: "Lớp 3",
      exams: [
        {
          name: "Luyện thi Toán ViOlympic cấp quận lớp 3 - đề số 1",
          time: "20 phút",
          attempts: 89321,
          userAttempts: 0,
          highestScore: "N/A",
        },
        {
          name: "Luyện thi Toán ViOlympic cấp quận lớp 3 - đề số 2",
          time: "20 phút",
          attempts: 30963,
          userAttempts: 0,
          highestScore: "N/A",
        },
        // Các đề thi khác trong cùng cấp
      ],
    },
    // Thêm các cấp lớp khác
  ];

  return (
    <FramePage>
      {examsData.map((level, index) => (
        <div className="exams" key={index}>
          <div className="exams__title">Lớp {level.level}</div>
          <div className="exams__content">
            <Table
              variant="soft"
              borderAxis="bothBetween"
              className="exams__content__table"
            >
              <thead>
                <tr>
                  <th
                    style={{ width: "40%" }}
                    className="exams__content__table__header"
                  >
                    Đề thi
                  </th>
                  <th className="exams__content__table__header">Thời gian</th>
                  <th className="exams__content__table__header">Lượt làm</th>
                  <th className="exams__content__table__header">Bạn làm</th>
                  <th className="exams__content__table__header">
                    Điểm cao nhất
                  </th>
                </tr>
              </thead>
              <tbody>
                {level.exams.map((exam, idx) => (
                  <tr key={idx}>
                    <td>{exam.name}</td>
                    <td>{exam.time}</td>
                    <td>{exam.attempts}</td>
                    <td>{exam.userAttempts}</td>
                    <td>{exam.highestScore}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ))}
    </FramePage>
  );
}

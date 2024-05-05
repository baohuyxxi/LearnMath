import React from "react";
import "./Tutorials.scss";
import FramePage from "~/components/FramePage/FramePage";

export default function Tutorials() {
  return (
    <FramePage>
      <div className="tutorials">
        <h1 className="tutorials__title">
          Hướng dẫn học trên website Học toán online
        </h1>
        <div className="tutorials__content">
          <p>Chào mừng bạn đến với website học toán online Học toán online!</p>
          <p>
            Học toán online là chương trình học toán online dành cho học sinh tiểu học
            và trung học cơ sở. Chúng tôi cung cấp nội dung phong phú, đa dạng,
            dễ hiểu và hấp dẫn để kích thích sự say mê và sáng tạo trong việc
            học toán của học sinh.
          </p>
          <p>
            Học toán online được thành lập bởi thầy giáo Trần Hữu Hiếu và đội ngũ giáo
            viên tâm huyết, giàu kinh nghiệm. Chúng tôi cam kết mang đến cho học
            sinh một môi trường học tập chất lượng và hiệu quả.
          </p>
          <p>
            Khi tham gia học online trên Học toán online, học sinh sẽ được tiếp cận với
            nhiều tính năng học toán hữu ích như:
          </p>
          <ul>
            <li>Học toán cơ bản hàng tuần</li>
            <li>Học toán nâng cao qua các chuyên đề</li>
            <li>Luyện thi ViOlympic</li>
            <li>Học toán tiếng Anh</li>
            <li>Thử sức với các bài toán tư duy hay và khó</li>
            <li>Luyện tập tổng hợp theo kỹ năng hoặc theo chuyên đề</li>
          </ul>
          <p>
            Và còn nhiều tính năng khác đang chờ đợi bạn khám phá trên Học toán online!
          </p>
          {/* Thêm nội dung hướng dẫn tiếp theo */}
        </div>
      </div>
    </FramePage>
  );
}

import React from "react";
import "./ProfileTeacher.scss";
import FramePage from "~/components/FramePage/FramePage";

export default function ProfileTeacher() {
  const data = {
    avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/432743255_3650243288584838_926608697568740804_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGV32_beqUQAvdOcMhqsh186bJW78VHzq3pslbvxUfOrdv_l6m8cwE7I7wyBO5ukfpDYuWtGdrDB5QI8IvzAK0T&_nc_ohc=mz_Baxs3OUkQ7kNvgHOanwS&_nc_ht=scontent.fsgn5-3.fna&cb_e2o_trans=q&oh=00_AfCi7EFTPmFxtdNJ3DrFKhe5rzYl1oMLM7snumtPq2FKMA&oe=663D7DA5",
    name: "Đỗ Mỹ Lan",
    position: "Giám Đốc Trung Tâm",
    sex: "Nữ",
    introduction:
      "Cô Đỗ Mỹ Lan sinh năm 1978, là một trong những thành viên sáng lập Trung tâm TOAN.VN và hiện là giám đốc hệ thống Trung tâm giáo dục TOAN.VN. Là “dân chuyên toán” từ những năm 1992, đam mê và có duyên với nghề giáo, những trải nghiệm đi dạy học từ thời học sinh, sinh viên, rồi đến khi là giáo viên, giảng dạy trong nhiều môi trường khác nhau, Thầy Lâm ấp ủ khát vọng xây dựng một môi trường học tập tích cực, chất lượng, phát huy tối đa khả năng của học sinh. Nơi mà thầy và trò được dạy và học hiệu quả nhất, để giải quyết bản chất của toán và các vấn đề trong cuộc sống.",
  };

  return (
    <FramePage>
      <div className="profile-teacher">
        <div className="profile-teacher__info">
          <img src={data.avatar} alt="Avatar" className="profile-teacher__avatar" />
          <div className="profile-teacher__details">
            <h2 className="profile-teacher__name">{data.sex == "Nam" ? "Thầy: ":"Cô: "}{data.name}</h2>
            <p className="profile-teacher__position">{data.position}</p>
            <p className="profile-teacher__introduction">{data.introduction}</p>
          </div>
        </div>
      </div>
    </FramePage>
  );
}

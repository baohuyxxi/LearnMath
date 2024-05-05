import "./TeachingStaff.scss";
import FramePage from "~/components/FramePage/FramePage";
import ListTeachingStaff from "~/components/ListTeachingStaff/ListTeachingStaff";
import BannerTeachingStaff from "~/components/BannerTeachingStaff/BannerTeachingStaff";
export default function TeachingStaff() {
  return (
    <FramePage>
      <div className="teaching-staff">
        <BannerTeachingStaff />
        <ListTeachingStaff />
      </div>
    </FramePage>
  );
}

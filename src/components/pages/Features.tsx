import DepartmentSection from "../ui/DepartmentSection";
import PostTable from "../ui/PostTable";

const Features = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl">
        <PostTable />
        <DepartmentSection />
      </div>
    </div>
  );
};

export default Features;

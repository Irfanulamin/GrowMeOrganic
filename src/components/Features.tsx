import DepartmentSection from "./DepartmentSection";
import PostTable from "./PostTable";

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

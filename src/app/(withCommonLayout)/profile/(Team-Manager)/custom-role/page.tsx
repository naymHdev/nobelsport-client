import CustomRole from "@/components/modules/profile/Team-Manager/custom-role/custom-role";
import RoleAssignment from "@/components/modules/profile/Team-Manager/custom-role/role-assignment";

const CustomRolePage = () => {
  return (
    <>
      <div className=" mb-10">
        <CustomRole />
        <RoleAssignment />
      </div>
    </>
  );
};

export default CustomRolePage;

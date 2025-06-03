import ProfileSidebar from "@/components/modules/profile/Sidebar";
import NSContainer from "@/components/ui/core/NSContainer";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NSContainer>
        <h2 className=" font-bold text-ns-title text-2xl font-openSans my-6">
          My Profile
        </h2>
        <div className=" flex min-h-screen md:gap-8">
          <div className="lg:w-1/4">
            <ProfileSidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </NSContainer>
    </>
  );
};

export default ProfileLayout;

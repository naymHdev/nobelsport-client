import ProfileSidebar from "@/components/modules/profile/Sidebar";
import NSContainer from "@/components/ui/core/NSContainer";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NSContainer>
      <h2 className="text-2xl font-bold text-ns-title font-openSans mt-24 mb-6">
        My Profile
      </h2>
      <div className="lg:flex min-h-screen lg:gap-8">
        <div className="w-full md:w-1/1 lg:w-1/3 xl:w-1/4 2xl:w-1/5 flex items-center lg:items-start justify-end lg:justify-end mb-3 lg:mb-0">
          <ProfileSidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </NSContainer>
  );
};

export default ProfileLayout;

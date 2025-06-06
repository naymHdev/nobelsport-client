import ProfileManagement from "@/components/modules/profile/ProfileManagement";
import VenueOwnerProfileM from "@/components/modules/profile/venue-owner/profile-management";

const ProfileManagementPage = () => {
  const role = "venueOwner";

  return (
    <>
      <div className=" mb-10">
        {role === "venueOwner" ? <VenueOwnerProfileM /> : <ProfileManagement />}
        {/* <ProfileManagement /> */}
      </div>
    </>
  );
};

export default ProfileManagementPage;

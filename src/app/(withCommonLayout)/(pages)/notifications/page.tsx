import NotificationsList from "@/components/modules/Notifications/NotificationsList";
import NSContainer from "@/components/ui/core/NSContainer";

const NotificationsPage = () => {
  return (
    <NSContainer className=" py-10 font-openSans">
      <div>
        <h1 className="text-2xl font-bold text-ns-title mb-8">Notifications</h1>
      </div>
      <NotificationsList />
    </NSContainer>
  );
};

export default NotificationsPage;

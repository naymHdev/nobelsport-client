import MessageHeader from "@/components/modules/Messages/message-header";
import MessageSidebar from "@/components/modules/Messages/message-sidebar";
import NSContainer from "@/components/ui/core/NSContainer";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NSContainer className=" flex">
      <MessageSidebar />
      <div className=" w-full min-h-screen">
        <MessageHeader />
        {children}
      </div>
    </NSContainer>
  );
};

export default MessagesLayout;

import GroupMessage from "@/components/modules/Messages/group-message";
import Message from "@/components/modules/Messages/message";

export default function MessagingApp() {
  return (
    <>
      {/* --------------- Just for testing --------------- */}
      <div className=" mt-20">
        <Message />
        <div>
          <h2 className=" font-black text-center my-10 text-2xl text-ns-title">
            Group Message Demo UI
          </h2>
          <GroupMessage />
        </div>
      </div>
    </>
  );
}

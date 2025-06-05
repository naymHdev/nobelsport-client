import NSContainer from "@/components/ui/core/NSContainer";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <NSContainer>
          <div>{children}</div>
        </NSContainer>
      </div>
    </>
  );
};

export default MessagesLayout;

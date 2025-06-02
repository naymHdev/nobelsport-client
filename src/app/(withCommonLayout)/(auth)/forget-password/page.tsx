import ForgotPassForm from "@/components/modules/auth/ForgotPassForm";
import NSContainer from "@/components/ui/core/NSContainer";

const ForgetPasswordPage = () => {
  return (
    <>
      <NSContainer>
        <div className=" py-8">
          <ForgotPassForm />
        </div>
      </NSContainer>
    </>
  );
};

export default ForgetPasswordPage;

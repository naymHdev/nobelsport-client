import SignInForm from "@/components/modules/auth/SignInForm";
import NSContainer from "@/components/ui/core/NSContainer";

const SignInPage = () => {
  return (
    <>
      <NSContainer>
        <div className=" py-8">
          <SignInForm />
        </div>
      </NSContainer>
    </>
  );
};

export default SignInPage;

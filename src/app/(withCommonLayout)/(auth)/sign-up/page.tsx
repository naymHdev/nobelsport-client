import SignUpForm from "@/components/modules/auth/SignUpForm";
import NSContainer from "@/components/ui/core/NSContainer";

const SignUpPage = () => {
  return (
    <>
      <NSContainer>
        <div className=" py-8">
          <SignUpForm />
        </div>
      </NSContainer>
    </>
  );
};

export default SignUpPage;

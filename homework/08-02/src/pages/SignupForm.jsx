import Button from "@/components/button";
import Input from "@/components/input";

function SignupForm() {
  return (
    <>
      <form className="SignupForm" id="form_signup" action="/" method="post">
        <Input inputType="id" isHintActive />
        <Input inputType="password" isHintActive />
        <Input inputType="email" />
        <Button />
      </form>
    </>
  );
}

export default SignupForm;

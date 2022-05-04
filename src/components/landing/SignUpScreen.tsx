import Header from "./Header";
import EmailInput from "./EmailInput";
import TagLine from "./TagLine";
export default function SignUpScreen() {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="bg-grey grid grow place-items-center">
        <div className="flex grow flex-col place-items-center ">
          <TagLine />
          <EmailInput />
          <div className="h-32" />
        </div>
      </div>
    </div>
  );
}

import Header from "./Header";
import EmailInput from "./EmailInput";
import TagLine from "./TagLine";
export default function LandingPage() {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="bg-grey grid grow place-items-center">
        <div className="flex grow flex-col place-items-center space-y-12 ">
          <TagLine />
          <EmailInput />
          <div className="h-32" />
        </div>
      </div>
    </div>
  );
}

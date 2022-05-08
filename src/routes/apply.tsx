import PersonalFormPage from "../page/PersonalFormPage";
import PreferenceFormPage from "../page/PreferenceFormPage";
import ApplicationFormnPage from "../page/ApplicationFormnPage";

export default function Apply() {
  const pages = [
    <PersonalFormPage />,
    <PreferenceFormPage />,
    <ApplicationFormnPage />,
  ];
  return <div>{pages[2]}</div>;
}

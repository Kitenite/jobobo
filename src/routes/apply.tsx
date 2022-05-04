import PersonalFormPage from "../page/PersonalFormPage";
import PreferenceFormPage from "../page/PreferenceFormPage";
export default function Apply() {
  const pages = [<PersonalFormPage />, <PreferenceFormPage />];
  return <div>{pages[1]}</div>;
}

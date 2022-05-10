import { Outlet, Link, Routes, Route } from "react-router-dom";
import FormFooter from "../components/forms/FormFooter";
import PersonalFormPage from "../page/PersonalFormPage";
import PreferenceFormPage from "../page/PreferenceFormPage";
import ApplicationFormPage from "../page/ApplicationFormPage";

export default function Apply() {
  let buttons = {
    back: {
      disabled: false,
      hidden: false,
    },
    next: {
      disabled: false,
      hidden: false,
    },
  };

  const links = [
    { path: "personal", element: <PersonalFormPage /> },
    { path: "preference", element: <PreferenceFormPage /> },
    { path: "application", element: <ApplicationFormPage /> },
  ];

  return (
    <div>
      <ul>
        {links.map((link, index) => {
          return (
            <ol key={index}>
              <Link to={link.path}>{link.path}</Link>
            </ol>
          );
        })}
      </ul>

      <Outlet />

      <Routes>
        {links.map((link) => {
          return <Route path={link.path} element={link.element} />;
        })}
      </Routes>
      <FormFooter buttons={buttons} />
    </div>
  );
}

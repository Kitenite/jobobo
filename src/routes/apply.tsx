import { Outlet, NavLink, Routes, Route } from "react-router-dom";
import FormFooter from "../components/forms/FormFooter";
import PersonalFormPage from "../page/PersonalFormPage";
import PreferenceFormPage from "../page/PreferenceFormPage";
import ApplicationFormPage from "../page/ApplicationFormPage";
import { useState } from "react";

export default function Apply() {
  const handlePersonalFormFilled = () => {
    const inputs = document.querySelectorAll("input");
    const validInputs = Array.from(inputs).filter(
      (input) => input.value !== ""
    );
    const allFilled = validInputs.length == inputs.length;
    if (allFilled) {
      enableNext(0);
    }
  };

  const handlePreferenceFormFilled = (disabled = false) => {
    enableNext(1, disabled);
  };

  const handleApplicationFormFilled = (disabled = false) => {
    enableNext(2, disabled);
  };

  const enableNext = (index: number, disabled = false) => {
    let newLinks = links.slice();
    newLinks[index].buttons.next.disabled = disabled;
    setLinks(newLinks);
  };

  const linksInital = [
    {
      path: "personal",
      element: <PersonalFormPage handleFilled={handlePersonalFormFilled} />,
      isActive: false,
      isFilled: false,
      buttons: {
        next: {
          disabled: true,
          hidden: false,
          path: "preference",
        },
      },
    },
    {
      path: "preference",
      element: <PreferenceFormPage handleFilled={handlePreferenceFormFilled} />,
      isActive: false,
      isFilled: false,
      buttons: {
        back: {
          disabled: false,
          path: "personal",
        },
        next: {
          disabled: true,
          path: "application",
        },
      },
    },
    {
      path: "application",
      element: (
        <ApplicationFormPage handleFilled={handleApplicationFormFilled} />
      ),
      isActive: false,
      isFilled: false,
      buttons: {
        back: {
          disabled: false,
          path: "preference",
        },
        next: {
          disabled: true,
          path: "/",
        },
      },
    },
  ];

  const [links, setLinks] = useState(linksInital);
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="p-6">
      <ul>
        {links.map((link, index) => {
          return (
            <ol key={index}>
              <NavLink
                className={(props) => {
                  let newLinks = links.slice();
                  if (newLinks[index].isActive != props.isActive) {
                    newLinks[index].isActive = props.isActive;
                    setLinks(newLinks);
                    if (props.isActive) {
                      setActiveLink(index);
                    }
                  }
                  return props.isActive ? "font-bold" : "";
                }}
                to={link.path}
              >
                {link.path}
              </NavLink>
            </ol>
          );
        })}
      </ul>
      <Outlet />
      <Routes>
        {links.map((link, index) => {
          return <Route key={index} path={link.path} element={link.element} />;
        })}
      </Routes>
      <FormFooter buttons={links[activeLink].buttons} />
    </div>
  );
}

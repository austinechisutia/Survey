"use client";

import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { LayeredDarkPanelless } from "survey-core/themes";
import { ContrastDark } from "survey-core/themes";
import { ContrastLight } from "survey-core/themes";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

export default function Home() {
  const savedJson =
    typeof window !== "undefined"
      ? window.localStorage.getItem("survey-json")
      : null;

  const surveyJson = savedJson ? JSON.parse(savedJson) : null;

  if (!surveyJson) {
    return <h2>No survey yet. Please create one at /creator</h2>;
  }

  const survey = new Model(surveyJson);
  survey.applyTheme(ContrastLight);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Survey model={survey} />
    </div>
  );
}

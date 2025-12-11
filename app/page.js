"use client";

import { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { ContrastLight } from "survey-core/themes";
import { SurveyCreatorModel } from "survey-creator-core";

import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

export default function Home() {
  const [surveyJson, setSurveyJson] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("survey-json");
    if (saved) {
      try {
        setSurveyJson(JSON.parse(saved));
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
      }
    }
  }, []);

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

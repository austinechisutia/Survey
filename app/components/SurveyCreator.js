'use client'

import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions = {
  autoSaveEnabled: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

export default function SurveyCreatorWidget(props) {
  let [creator, setCreator] = useState();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    setCreator(creator);
  }

  creator.saveSurveyFunc = (saveNo, status) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
   
  };

  creator.text = JSON.stringify(props.json) || window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}

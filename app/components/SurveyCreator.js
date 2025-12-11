'use client'

import { useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import "survey-core/survey.i18n";



const defaultCreatorOptions = {
  autoSaveEnabled: true,
  showTranslationTab: true
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

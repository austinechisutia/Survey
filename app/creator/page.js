"use client"

import dynamic from "next/dynamic";

const SurveyCreatorComponent = dynamic(
  () => import("../components/SurveyCreator"),
  {
    ssr: false,
  }
);

export default function SurveyCreator() {
  return <SurveyCreatorComponent />;
}

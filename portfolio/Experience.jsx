import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { HiAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import WorkExp from "./WorkExp";
import Education from "./Education";
import CodingProfiles from "./CodingProfiles"; // Importing the new component

const data = [
  {
    label: "Experience",
    value: "Work Experience",
    icon: HiOutlineBriefcase,
    desc: <WorkExp />,
  },
  {
    label: "Education",
    value: "Education",
    icon: HiAcademicCap,
    desc: <Education />,
  },
  {
    label: "Coding Profiles", // New tab for coding profiles
    value: "Coding Profiles",
    icon: HiAcademicCap, // You can choose an appropriate icon
    desc: <CodingProfiles />,
  },
];

const Experience = () => {
  return (
    <div className="flex justify-center"> {/* Centering the content */}
      <Tabs
        value={data[0].value}
        className="w-full flex items-center flex-col px-5 py-10"
      >
        <TabsHeader className="w-96 flex items-center mb-5 drop-shadow-2xl">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex justify-center">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Experience;

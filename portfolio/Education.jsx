import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
// import university from "./assets/university.png";


const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://imgs.search.brave.com/LDBlkxt-UMKujINYwSplvRJjrNWT6OS8sXBDbkT50ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dW5pdmVyc2l0eWth/cnQuY29tLy9Db250/ZW50L3VwbG9hZC9h/ZG1pbi95c3g1bWxy/Zi5iaDUucG5n.jpg"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              SRI ESHWAR COLLEGE OF ENGINEERING
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="white" className="font-semibold text-black">
            Bachelor of Engineering ,CSE(AIML) 
            <br /> 2025 - Present | CGPA:8.36
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://imgs.search.brave.com/LDBlkxt-UMKujINYwSplvRJjrNWT6OS8sXBDbkT50ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dW5pdmVyc2l0eWth/cnQuY29tLy9Db250/ZW50L3VwbG9hZC9h/ZG1pbi95c3g1bWxy/Zi5iaDUucG5n.png"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              VIGNESHWAR VIDHYA MANDHIR 
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
              Higher Secondary School <br /> 2021 - 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://vidyavaridhividyalaya.in/img/logo.png"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              VIGNESHWAR VIDHYA MANDHIR
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
            Secondary School Certificate (SSC)  <br /> 2020 - 2021
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;

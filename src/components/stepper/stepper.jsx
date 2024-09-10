import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

// Custom styles for the step connector
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '&.MuiStepConnector-root': {
    marginLeft: theme.spacing(2),
  },
  '& .MuiStepConnector-line': {
    borderLeftWidth: 3,
    borderColor: '#d3d3d3',
    minHeight: '40px',
  },
}));

// Custom icon for completed and active steps
const StepIcon = (props) => {
  const { active, completed } = props;

  return (
    <div>
      {completed ? (
        <CheckCircleIcon style={{ color: '#009688' }} />
      ) : active ? (
        <CheckCircleIcon style={{ color: '#009688' }} />
      ) : (
        <CircleIcon style={{ color: '#d3d3d3' }} />
      )}
    </div>
  );
};

const steps = [
  "Non-disclosure document",
  "Project understanding",
  "Requirement document",
  "Use persona study",
  "User case development",
  "Wireframe designing",
  "UI/UX development",
  "Coding & development",
  "Quality test",
  "Pre-release demo",
  "Feedback & improvement",
  "Deployment",
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(2);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<CustomConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={StepIcon}
                onClick={() => setActiveStep(index)}
              >
                <Typography
                  style={{
                    textDecoration: activeStep > index ? 'line-through' : 'none',
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div style={{ flex: 3, paddingLeft: '50px' }}>
        <Typography variant="h5" gutterBottom>
          {steps[activeStep]}
        </Typography>
        <Typography>
          {
            // Placeholder description
            "Here goes a description related to the selected step."
          }
        </Typography>
      </div>
    </div>
  );
}

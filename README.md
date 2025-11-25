# Bounty Creation Platform

## Project Overview

This is a simple 3-step Bounty Creation flow where users can fill in basic details, set rewards, and provide backer information.
Each step includes validation, and users can move forward or backward through the form.
Once all steps are completed, the app shows a summary of the bounty.

### How to Navigate

- Steps are listed in the sidebar
- Use the Next and Back buttons to move between steps
- You can't continue unless the required fields are filled
- The last step shows the final details

---

## Live Demo

🔗 **Deployed Application**: [https://bounty-creator-app.vercel.app/](https://bounty-creator-app.vercel.app/)


---

## Technology Stack

- React (Vite)
- React Hook Form for form handling and validation
- Tailwind CSS for styling
- Hosted on Vercel
- JavaScript (ES6+)

---

## Features Implemented

- ✅ 3-step wizard (Basic Details, Rewards & Timeline, Backer Information)
- ✅ Form validation with clear error messages
- ✅ Sidebar navigation with step highlighting
- ✅ State persistence across steps
- ✅ Back and Next navigation buttons
- ✅ Confirmation screen after submission
- ✅ Result page displaying final JSON payload
- ✅ Responsive design for mobile and desktop
- ✅ Toggle-based conditional fields (Physical location, Backer info, Impact Certificate)
- ✅ Multi-select SDG dropdown
- ✅ Date picker for expiration date
- ✅ File upload for backer logo

---

## Code Structure

```
src/
│ App.jsx
│ CreateBounty.jsx
│ initialValues.js
│ main.jsx
│
├── components/
│ ├── steps/
│ │ ├── StepBasic.jsx
│ │ ├── StepRewards.jsx
│ │ └── StepBacker.jsx
│ │
│ ├── ui/
│ │ ├── Input.jsx
│ │ ├── Textarea.jsx
│ │ ├── Select.jsx
│ │ ├── Toggle.jsx
│ │ └── InputFieldWrapper.jsx
│ │
│ ├── Sidebar.jsx
│ ├── MobileStepper.jsx
│ ├── FooterActions.jsx
│ └── BountyResult.jsx
│
├── hooks/
│ └── useBountyFlow.jsx
│
└── utils/
    └── findFirstErrorField.js
```

---

### Folder Purpose

- **components/** – main UI and step screens
- **components/ui/** – reusable input components (Input, Textarea, Select, Toggle)
- **components/steps/** – individual form steps (StepBasic, StepRewards, StepBacker)
- **hooks/** – shared logic for handling step flow and form state
- **utils/** – small helper functions for validation and error handling

---

## Setup & Run

```bash
npm install
npm run dev
```

Then open: `http://localhost:5173`

---

## Build & Deployment

### Build

```bash
npm run build
```

### Deployment

The project is deployed on Vercel.
Vercel automatically detects the Vite build and deploys the production build.

To deploy your own version:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

---

## Assumptions & Limitations

- **No Backend Integration** – Data is not persisted after page refresh. All form data exists only in client-side state.
- **File Upload Simulation** – Backer logo file uploads generate a mock URL (no actual file storage implemented).
- **Server Request Simulation** – `setTimeout` is used to simulate a 2-second server request on form submission.
- **SDG Multi-Select** – Implemented as a dropdown with checkbox functionality for selecting multiple SDGs.
- **Validation** – All required fields are validated on the client side before allowing navigation to the next step.
- **Mobile Responsiveness** – The sidebar converts to a mobile stepper on smaller screens.

---

## Form Payload Structure

Upon successful submission, the following JSON structure is generated:

```json
{
  "title": "Bounty Title",
  "description": "Bounty Description...",
  "projectTitle": "Project Title",
  "type": "Development",
  "dominant_core": "Social",
  "mode": "digital",
  "location": "New York, USA",
  "reward": {
    "currency": "USD",
    "amount": 500,
    "winners": 1
  },
  "timeline": {
    "expiration_date": "2023-12-31T23:59:59.000Z",
    "estimated_completion": {
      "days": 2,
      "hours": 4,
      "minutes": 0
    }
  },
  "hasImpactCertificate": true,
  "impactBriefMessage": "Brief Message",
  "sdgs": ["Goal 1", "Goal 2"],
  "has_backer": true,
  "backer": {
    "name": "Sponsor Name",
    "logo": "https://example.com/logo.png",
    "message": "Sponsor message..."
  },
  "terms_accepted": true
}
```

---

## Notes

- Form validation is handled on the client using React Hook Form
- The app follows a clean component architecture with reusable UI elements
- State is managed using React hooks and lifted state pattern
- All requirements from the assignment have been implemented
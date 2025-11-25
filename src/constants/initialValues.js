export const INITIAL_VALUES = {
  title: "",
  description: "",
  type: "",
  dominant_core: "",
  mode: "digital",
  location: "",
  reward: {
    currency: "USD",
    amount: 0,
    winners: 1,
  },
  timeline: {
    expiration_date: "",
    estimated_completion: {
      days: 0,
      hours: 0,
      minutes: 0,
    },
  },
  hasImpactCertificate: false,
  impactBriefMessage: "",
  sdgs: [],
  has_backer: false,
  backer: {
    name: "",
    logo: "",
    message: "",
  },
  terms_accepted: false,
};

export const PROJECTS = [
  "Impact Miner Project Alpha",
  "Green Earth Initiative",
  "Ocean Cleanup Crew",
  "Solar Systems Upgrade",
];

export const BOUNTY_TYPES = [
  "Content",
  "Design",
  "Development",
  "Marketing",
  "Other",
];
export const CORE_TYPES = ["Water", "Earth", "Social", "Energy"];
export const CURRENCIES = ["USD", "EUR", "INR", "GBP", "USDC"];
export const SDG_OPTIONS = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Energy",
  "Climate Action",
];

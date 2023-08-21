export type ExperienceType = {
  company: string;
  jobTitle: string;
  endDate: string;
  startDate: string;
  responsibilities: Responsibilities[];
};

type Responsibilities = {
  title: string;
  description: string;
};

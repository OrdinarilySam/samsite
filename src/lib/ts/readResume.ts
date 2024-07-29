import toml from 'toml';

export type { ResumeT };
export { getResume };

async function getResume(): Promise<ResumeT> {
  let res = await fetch('/src/lib/toml/resume.toml');
  let tomlData = await res.text();
  let data = toml.parse(tomlData);
  return data;
}

type ResumeT = {
  About: {
    name: string;
    location: string;
    phone: string;
    email: string;
    website: string;
  };
  Education: {
    'start-date': string;
    'end-date': string;
    location: string;
    degree: string;
    gpa: string;
    honors: string;
  }[];
  Skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  Experience: {
    'start-date': string;
    'end-date': string;
    company: string;
    position: string;
    about: string[];
  }[];
  Projects: {
    name: string;
    tools: string[];
    about: string;
  }[];
};

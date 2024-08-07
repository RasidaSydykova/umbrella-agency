export interface Portfolio {
  id: number;
  title: string;
  price: string;
  image: string;
}

export interface Review {
  id: number;
  avatar: string;
  fullname: string;
  position: string;
  company_name: string;
  star: number;
  description: string;
}

export interface Founder {
  id: number;
  image: string;
  fullname: string;
  quote: string;
  position: string;
  description: string;
}

export interface Vacancy {
  id: number;
  title: string;
  description: string;
  url: string;
}

export interface Service {
  id: number;
  title: string;
  category: [
    {
      id: number;
      title: string;
    },
  ];
}

interface Section {
  id: number;
  title: string;
  description: string;
}

interface IProcess {
  id: number;
  description: string;
}

interface Portfolio {
  id: number;
  img: string | null;
  title: string;
}

interface TeamMember {
  id: number;
  position: string;
}

interface Tab {
  id: number;
  title: string;
  sections: Section[];
  processes: Process[];
  portfolios: Portfolio[];
  team: TeamMember[];
}

interface ServicePage {
  id: number;
  title: string;
  gif: string;
  short_description_for_banner: string;
  tabs: Tab[];
}
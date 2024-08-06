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

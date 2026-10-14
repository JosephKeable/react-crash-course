interface Job {
  type: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  id: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export type { Job };

export interface Department {
  department: string;
  sub_departments: string[];
}

export interface TPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TFormValues = {
  name: string;
  number: string;
  email: string;
};

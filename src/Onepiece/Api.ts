export type charOnepieceApi = {
  id: number;
  name: string;
  size: string;
  age: string;
  bounty: string;
  crew: {
    id: number;
    name: string;
    description: null;
    status: string;
    number: string;
    roman_name: string;
    total_prime: string;
    is_yonko: boolean;
  };
  fruit: {
    id: number;
    name: string;
    description: string;
    type: string;
    filename: string;
    roman_name: string;
    technicalFile: string;
  };
  job: string;
  status: string;
};

export type charList = {
  id: number;
  name: string;
  size: string;
  age: string;
  bounty:string;
  crew: {
    id: number;
    name: string;
    description: null;
    status: string;
    number: string;
    roman_name: string;
    total_prime: string;
    is_yonko:boolean;
  };
  fruit: {
    id: number;
    name: string;
    description:string;
    type: string;
    filename: string;
    roman_name: string;
    technicalFile:string;
  };
  job: string;
  status: string;
};
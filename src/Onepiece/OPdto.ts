import { charList } from "./Api.ts";

export class OPDto {
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

  constructor(listchar: charList) {
    this.id = listchar.id;
    this.name = listchar.name;
    this.size = listchar.size;
    this.age = listchar.age;
    this.bounty = listchar.bounty;
    this.crew = {
      id: listchar.id,
      name: listchar.name,
      description: listchar.crew.description,
      status: listchar.status,
      number: listchar.crew.number,
      roman_name: listchar.crew.roman_name,
      total_prime: listchar.crew.total_prime,
      is_yonko: listchar.crew.is_yonko,
    };
    this.fruit = {
      id: listchar.id,
      name: listchar.name,
      description: listchar.fruit.description,
      type: listchar.fruit.type,
      filename: listchar.fruit.filename,
      roman_name: listchar.fruit.roman_name,
      technicalFile: listchar.fruit.technicalFile,
    };
    this.job = listchar.job;
    this.status = listchar.status;
  }

  static basic(OPChar: charList) {
    return new OPDto(OPChar);
  }
}

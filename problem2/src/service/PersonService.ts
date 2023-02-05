import { Person } from "../types/PersonTypes";
import { persons } from "../model/Person";

export const logPerson=(user:Person)=>console.log(` - ${user.name}, ${user.age}`)


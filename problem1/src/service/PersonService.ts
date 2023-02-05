import { Person } from "../types/PersonTypes";

//this solution is the normal function
// export function logPerson(persons:Person){
//     let additionalInformation: string;
//     if ('role' in persons) {
//         additionalInformation = persons.role;
//     } else {
//         additionalInformation = persons.occupation;
//     }

//     console.log(` - ${persons.name}, ${persons.age}, ${additionalInformation}`);
// }


//this solution is the arrow function and i use a ternary operator to be more concise and readable code
export const logPerson=(persons:Person)=>{
    let additionalInformation : string = 'role' in persons ? persons.role : persons.occupation;
    console.log(`-${persons.name},  ${persons.age}, ${additionalInformation}`);
}
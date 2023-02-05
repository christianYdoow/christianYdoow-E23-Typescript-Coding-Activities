import { persons } from "../model/Person";
import { logPerson } from "../service/PersonService";

persons.forEach(logPerson);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = void 0;
const logPerson = (persons) => {
    let additionalInformation = 'role' in persons ? persons.role : persons.occupation;
    console.log(`-${persons.name},  ${persons.age}, ${additionalInformation}`);
};
exports.logPerson = logPerson;
//# sourceMappingURL=PersonService.js.map
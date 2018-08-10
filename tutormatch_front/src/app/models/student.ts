import { Tutor } from './tutor';

export class Student {
    id?: string;
    name?: string;
    email?: string;
    tutors: Tutor[];
}

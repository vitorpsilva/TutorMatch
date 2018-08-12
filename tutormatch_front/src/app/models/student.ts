import { Tutor } from './tutor';

export class Student {
    id?: number;
    name?: string;
    email?: string;
    tutors: Tutor[];
}

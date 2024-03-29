import { UserRole, UserSize } from "const/user";

export interface User {
    id: string;
    email?: string;
    login: string;
    password: string;
    role: UserRole
}

export interface UserIndividual extends User {
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    postCode: string;
    isNewUser: boolean;
    size: UserSize;
    phoneNumber?: string;
    fundraisingGoal: string;
    donation: string;
}

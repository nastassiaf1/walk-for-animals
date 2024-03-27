export interface User {
    id?: string;
    email?: string;
    login: string;
    password: string;
    role: UserRole
}

export enum UserRole {
    TEAM = 'team',
    INDIVIDUAL = 'individual',
    TEAMMATE = 'teammate',
    ADMIN = 'admin',
}

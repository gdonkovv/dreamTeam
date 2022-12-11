import { Team } from "./team";

export interface IUser {
    email: string;
    password: string;
    id: string;
    team: Team
}
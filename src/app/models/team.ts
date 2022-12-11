import { IUser } from "./user";

export interface Team {
    name: string;
    emblem: string;
    strategy: string;
    playersGK: string[];
    playersDF: string[];
    playersMF: string[];
    playersFW: string[];
    owner: IUser;
    ratings: number[];
}
import { Command } from "./command.enum";

export interface Message {
    command: Command;
    name: string;
    title: string;
    time?: number;
}
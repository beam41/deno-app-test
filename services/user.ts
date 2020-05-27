import { User } from "../model/user.ts";
import { v1 } from "https://deno.land/std/uuid/mod.ts";

const user: User[] = [];

export class UserService {
  static getAll(): User[] {
    return user;
  }

  static addUser(newUser: User): string {
    const id: string = v1.generate() as string;
    user.push({ ...newUser, id });
    return id;
  }

  static getById(queryId: string): User {
    return user.find(({ id }) => queryId === id) as User;
  }
}

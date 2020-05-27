import { Drash } from "https://deno.land/x/drash/mod.ts";

import { UserService } from "../services/user.ts";
import { User } from "../model/user.ts";

export default class UserResource extends Drash.Http.Resource {
  static paths = ["/user", "/user/:id"];

  public GET() {
    const id = this.request.getPathParam("id");
    if (id) {
      this.response.body = UserService.getById(id);
    } else {
      this.response.body = UserService.getAll();
    }
    return this.response;
  }

  public POST() {
    // I can't find how to get all top-level field in json without exclosing in bigger top-level field
    const user: User = this.request.getBodyParam("user") as User;
    this.response.body = { id: UserService.addUser(user) };
    return this.response;
  }
}

import { Drash } from "https://deno.land/x/drash/mod.ts";

import UserResource from "./resources/user_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [UserResource],
});

const port: number = 8080;

server.run({
  hostname: "localhost",
  port,
});

console.log(`Server running on port ${port}`);

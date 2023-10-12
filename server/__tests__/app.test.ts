import request from "supertest";

import app from "../src/app";

describe("Routes", () => {
 it("creates a user ", async () => {
  const res = await request(app)
   .post("/login")
   .send({ username: "tester" })
   .set("Content-Type", "application/json")
   .set("Accept", "application/json");
  expect(res.statusCode).toEqual(200);
  expect(res.body.username).toEqual("tester");
 });
});

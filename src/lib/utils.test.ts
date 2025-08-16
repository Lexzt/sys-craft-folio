import { describe, it, expect } from "bun:test";
import { cn } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("p-2", "text-sm", "p-2")).toBe("text-sm p-2");
  });
});

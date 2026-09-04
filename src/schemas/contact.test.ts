import { describe, expect, it } from "vitest";
import { parseContactCategory, validateContact } from "./contact";
describe("contact validation", () => {
  it("rejects an empty inquiry", () => {
    const errors = validateContact({});
    expect(errors.name).toBe("required");
    expect(errors.email).toBe("email");
    expect(errors.privacyAccepted).toBe("privacy");
  });
  it("accepts a complete inquiry", () => {
    expect(
      validateContact({
        name: "Dewi",
        email: "dewi@example.com",
        category: "build",
        message: "Saya membutuhkan sistem inventaris baru.",
        privacyAccepted: true,
      }),
    ).toEqual({});
  });

  it("only accepts allowlisted contact categories", () => {
    expect(parseContactCategory("automate")).toBe("automate");
    expect(parseContactCategory("unknown")).toBe("unsure");
    expect(parseContactCategory(null)).toBe("unsure");

    expect(
      validateContact({
        name: "Dewi",
        email: "dewi@example.com",
        category: "unknown",
        message: "Saya membutuhkan sistem inventaris baru.",
        privacyAccepted: true,
      }).category,
    ).toBe("required");
  });
});

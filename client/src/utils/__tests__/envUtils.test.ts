import { parseEnvText } from "../envUtils";

describe("parseEnvText", () => {
  test("parses multiple lines", () => {
    const text = "KEY1=value1\nKEY2=value2";
    expect(parseEnvText(text)).toEqual({ KEY1: "value1", KEY2: "value2" });
  });

  test("ignores comments and blank lines", () => {
    const text = "# comment\nKEY=value\n\n";
    expect(parseEnvText(text)).toEqual({ KEY: "value" });
  });

  test("strips surrounding quotes", () => {
    const text = 'KEY="quoted"';
    expect(parseEnvText(text)).toEqual({ KEY: "quoted" });
  });
});

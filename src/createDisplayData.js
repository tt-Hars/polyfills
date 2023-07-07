import { attachEl, createEl } from "./util";

export const createDisplayData = (polyfillName, polyfillResult, polyfillFn) => {
  const displayWrapper = createEl("div", {
    id: `array-${polyfillName}-wrapper`,
    classes: "",
  });
  const displayHeading = createEl(
    "h2",
    { id: `array-${polyfillName}-heading`, classes: "ml-1 my-1" },
    `Array.${polyfillName}`
  );
  const displayCodeSubHeading = createEl(
    "h3",
    { id: `array-${polyfillName}-code-sub-heading`, classes: "ml-2 my-1" },
    "Code"
  );
  const displayPre = createEl("pre", {
    id: `array-${polyfillName}-pre`,
    classes: "ml-2",
  });
  const displayCode = createEl(
    "code",
    { id: `array-${polyfillName}-code`, classes: "language-javascript" },
    polyfillFn
  );
  const displayResultSubHeading = createEl(
    "h3",
    { id: `array-${polyfillName}-result-sub-heading`, classes: "ml-2 my-1" },
    "Result"
  );
  const displayResultPre = createEl("pre", {
    id: `array-${polyfillName}-result-pre`,
    classes: "ml-2",
  });
  const displayResultCode = createEl(
    "code",
    { id: `array-${polyfillName}-result-code`, classes: "language-javascript" },
    polyfillResult
  );
  const lineBreak = createEl("hr", { id: "", classes: "hr my-2" });
  attachEl(displayPre, displayCode);
  attachEl(displayResultPre, displayResultCode);
  attachEl(displayWrapper, displayHeading);
  attachEl(displayWrapper, displayCodeSubHeading);
  attachEl(displayWrapper, displayPre);
  attachEl(displayWrapper, displayResultSubHeading);
  attachEl(displayWrapper, displayResultPre);
  attachEl("#array-polyfills", displayWrapper);
  attachEl("#array-polyfills", lineBreak);
};

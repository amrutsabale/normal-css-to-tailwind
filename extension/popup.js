const cssClassInput = document.querySelector("#cssClassInput");
const convertButton = document.querySelector("#convertButton");

const TAILWIND_CSS_MAP = {
  "display:flex": "flex",
  "display:inline-flex": "inline-flex",
  "flex-direction:row": "flex-row",
};

convertButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cssClassInputVal = removeExtraSpacesFromInput(cssClassInput.value);

  if (cssClassInputVal === "") {
    alert("Please Enter CSS class");
  } else {
    const convertedTailwindClass =
      convertCSSClassIntoTailwind(cssClassInputVal);

    displayConvertedTailwindCSSClass(convertedTailwindClass);
  }
});

const removeExtraSpacesFromInput = (inputClass) => {
  return inputClass
    .split(":")
    .map((subPart) => subPart.trim())
    .join(":");
};

const convertCSSClassIntoTailwind = (cssClassInputVal) => {
  if (TAILWIND_CSS_MAP[cssClassInputVal]) {
    return TAILWIND_CSS_MAP[cssClassInputVal];
  }
  return null;
};

const displayConvertedTailwindCSSClass = (convertedTailwindClass) => {
  const outputClassContainer = document.querySelector("#outputClassContainer");
  if (!convertedTailwindClass) {
    outputClassContainer.innerText = "No class found. Please send it to us.";
  } else {
    outputClassContainer.innerText = convertedTailwindClass;
  }
};

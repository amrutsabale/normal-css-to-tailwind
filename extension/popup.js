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
  const cssClassInputError = document.querySelector("#cssClassInputError");

  if (cssClassInputVal === "") {
    cssClassInput.classList.add("border-red-500");
    cssClassInputError.innerText = "Please Enter valid CSS class.";
  } else {
    const convertedTailwindClass =
      convertCSSClassIntoTailwind(cssClassInputVal);

    displayConvertedTailwindCSSClass(convertedTailwindClass);
  }
});

cssClassInput.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    cssClassInput.classList.remove("border-red-500");
    cssClassInputError.innerText = "";
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
  outputClassContainer.classList.remove("hidden");
  if (!convertedTailwindClass) {
    outputClassContainer.innerText = "No class found. Please send it to us.";
  } else {
    outputClassContainer.innerText = convertedTailwindClass;
  }
};

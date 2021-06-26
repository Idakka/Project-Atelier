const generateSelectorPath = (element) => {
  let precedingSelectors = '';
  if (element.parentElement) {
    precedingSelectors += generateSelectorPath(element.parentNode) + ' ';
  }
  let currentElementSelector = element.localName;
  if (element.id) {
    currentElementSelector += '#' + element.id;
  } else if (element.classList.length !== 0) {
    Array.from(element.classList).forEach(className => {
      currentElementSelector += '.' + className;
    });
  }
  return precedingSelectors + currentElementSelector;
};

export default generateSelectorPath;

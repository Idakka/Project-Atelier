const generateSelectorPath = (element) => {
  console.log(element);
  // create output text var
  let precedingSelectors = '';
  // if there is a parent element
  if (element.parentElement) {
    // run generateSelectorPath on the parent
    // add return to precedingSelectors
    precedingSelectors += generateSelectorPath(element.parentNode) + ' ';
  }
  // set current element selector to element.localname
  let currentElementSelector = element.localName;
  // if element has an id
  if (element.id) {
    // add '#' + id to end of current element selector
    currentElementSelector += '#' + element.id;
  // else if element has classes
  } else if (element.classList.length !== 0) {
    // for each class name in list
    Array.from(element.classList).forEach(className => {
      // add '.' + class name to end of current element selector
      currentElementSelector += '.' + className;
    });
  }
  // append current element selector to the precedingSelectors
  // return the precedingSelectors
  return precedingSelectors + currentElementSelector;
};

export default generateSelectorPath;

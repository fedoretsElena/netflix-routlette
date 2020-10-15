export const getSummarizeErrors = (message, fields) => {
  const errors = message.split(',').reduce((acc, str) => {
    const fieldName = str.substring(
      str.indexOf('"') + 1,
      str.lastIndexOf('"'));
    const description = str.substring(str.lastIndexOf('"') + 1).trim();
    return {...acc, [fieldName]: description};
  }, {});

  return Object.keys(fields).reduce((acc, key) => ({...acc, [key]: errors[key]}), {});
}

export const deleteEmptyProps = (formValues) => {
  Object.entries(formValues).forEach(([fieldKey, fieldValue]) => {
    if (typeof fieldValue !== "number" && !fieldValue?.length) {
      delete formValues[fieldKey];
    }
  })

  return formValues;
}
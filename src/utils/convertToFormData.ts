const convertToFormData = (values: any) => {
  const { file, ...remainingValues } = values;
  const formData = new FormData();
  const strigifiedValues = JSON.stringify(remainingValues);
  formData.append("data", strigifiedValues);
  if (file) {
    formData.append("file", file);
  }
  return formData;
};

export default convertToFormData;

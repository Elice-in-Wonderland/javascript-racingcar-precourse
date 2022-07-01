function formDataToObject(formData: FormData) {
  return [...formData.entries()].reduce(
    (acc: Record<string, any>, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {},
  );
}

export { formDataToObject };

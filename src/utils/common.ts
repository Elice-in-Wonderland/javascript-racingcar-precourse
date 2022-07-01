function formDataToObject(formData: FormData) {
  return [...formData.entries()].reduce(
    (acc: Record<string, string>, [key, value]) => {
      if (typeof value !== 'string') return acc;
      acc[key] = value;
      return acc;
    },
    {},
  );
}

export { formDataToObject };

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

function getRandomNumber(startInclusive: number, endInclusive: number) {
  return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
}

export { formDataToObject, getRandomNumber };

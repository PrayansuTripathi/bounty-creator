 const findFirstErrorField = (errors, parent = '') => {
  for (const key in errors) {
    const path = parent ? `${parent}.${key}` : key;

    if (errors[key]?.message) {
      return path; 
    }

    if (typeof errors[key] === 'object') {
      const deeper = findFirstErrorField(errors[key], path);
      if (deeper) return deeper;
    }
  }
};
export default findFirstErrorField;
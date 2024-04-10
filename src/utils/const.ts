export const normalizeCepNumber = (value: string | undefined) => {
  console.log(value,'value');
  if (!value) return '';
  return value.replace(/\D/g, "")
  .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
  .replace(/(-\d{3})(\d+?)/, '$1')    
}

export const removeFormat = (value: string) => {
  if (value && value.length > 0) {
    return value
      .trim()
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .replace('/', '')
      .replace('.', '')
      .replace('-', '');
  } else return '';
};
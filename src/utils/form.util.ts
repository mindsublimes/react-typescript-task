import { DISCOUNT_CODE_LENGTH } from "../constants/form.constant";

export const generateRandomCode = (length = DISCOUNT_CODE_LENGTH) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

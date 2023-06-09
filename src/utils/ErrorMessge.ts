import { ValidationArguments } from 'class-validator';
const sizeErrorMessage = function (isMin = true) {
  return (validationArguments: ValidationArguments) => {
    if (isMin) {
      return `La taille minimale doit être égale à ${validationArguments.constraints[0]}`;
    } else {
      return `La taille maximale doit être égale à ${validationArguments.constraints[0]}`;
    }
  };
};
export const errorMessages = { sizeErrorMessage };

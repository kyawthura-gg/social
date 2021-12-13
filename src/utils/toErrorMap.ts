import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.map(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};

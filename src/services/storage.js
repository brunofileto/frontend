export const ENROLLMENT_KEY = "ENROLLMENT";
export const setEnrollment = (enrollment : string) => {
  localStorage.setItem(ENROLLMENT_KEY, enrollment);
};
export const getEnrollment = () => localStorage.getItem(ENROLLMENT_KEY);
export const removemEnrollment = () => {
  localStorage.removeItem(ENROLLMENT_KEY);
};

export const EVALUATION_ID_KEY = "EVALUATION_ID";
export const setEvaluation = (evaluationId : string) => {
  localStorage.setItem(EVALUATION_ID_KEY, evaluationId);
};
export const getEvaluation = () => localStorage.getItem(EVALUATION_ID_KEY);
// export const removemEnrollment = () => {
//   localStorage.removeItem(EVALUATION_ID_KEY);
// };
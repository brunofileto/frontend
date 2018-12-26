export const ENROLLMENT_KEY = "ENROLLMENT";
export const setEnrollment = (enrollment : string) => {
  localStorage.setItem(ENROLLMENT_KEY, enrollment);
};
export const getEnrollment = () => localStorage.getItem(ENROLLMENT_KEY);
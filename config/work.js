import { shape, string } from "prop-types";

const work = [
  {
    start: "Jan 2021",
    end: "Current",
    company: "Tidal Wave Technologies",
    designation: "Software Developer",
  },
];

export default work;

export const workType = shape({
  start: string.isRequired,
  end: string.isRequired,
  company: string.isRequired,
  designation: string.isRequired,
});

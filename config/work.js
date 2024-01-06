import { shape, string } from "prop-types";

const work = [
  {
    start: "Jan 2021",
    end: "Aug 2022",
    company: "Tidal Wave Technologies",
    designation: "Software Developer",
  },
  {
    start: "Sept 2022",
    end: "Ongoing",
    company: "Server Lane Technologies",
    designation: "Software Engineer (Backend Developer)",
  },
];

export default work;

export const workType = shape({
  start: string.isRequired,
  end: string.isRequired,
  company: string.isRequired,
  designation: string.isRequired,
});

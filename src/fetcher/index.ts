import axios from "axios";
import { UserI } from "../types";

const url = "http://localhost:4400/eligibility";

export const postEligibilityInfo = async (user: UserI) => {
  const response = await axios.post(url, user);
  return {
    cards: response.data,
  };
};

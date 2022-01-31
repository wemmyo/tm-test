// import axios from "axios";
import { UserI } from "../types";

const url = "http://localhost:4400/eligibility";
// process.env.REACT_APP_BASEURL;

export const postEligibilityInfo = async (user: UserI, axios?: any) => {
  // const response = await axios.post(url, user);
  const response = await axios({
    url,
    method: "post",
    data: user,
  });
  return {
    cards: response.data,
  };
};

import { skipData } from "../assets/skipData";

async function getSkips() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skipData);
    }, 2000);
  });
}

export default getSkips;

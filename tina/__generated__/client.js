import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '4a19dd1339e2089fc82454eeb8361ec0799d0944', queries });
export default client;
  
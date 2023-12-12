import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/6f93c909-6622-4d21-b0c8-cf59474224bb/github/main', token: '4a19dd1339e2089fc82454eeb8361ec0799d0944', queries });
export default client;
  
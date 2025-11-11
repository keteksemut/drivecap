import { loadEnvConfig } from "@next/env"; 

const projectDir = process.cwd();
loadEnvConfig(projectDir);

console.log(process.env.CONTENTFUL_SPACE_ID);

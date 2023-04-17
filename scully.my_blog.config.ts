import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config : ScullyConfig = {
  projectRoot : "./src",
  projectName : "my_blog",
  outDir : "./dist/static",
  routes : {
    '/post/:id' : {
      type:'contentFolder',
      id: {folder: "./mdfiles"}
    }
  }
};

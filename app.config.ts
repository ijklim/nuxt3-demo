// https://nuxt.com/docs/getting-started/configuration
import { displayName, version } from '~/package.json';

export default defineAppConfig({
  appName: displayName,
  appVersion: version,
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [],
  fastRefresh: {},
  mfsu: {},
  dynamicImport: {},
  request: {
    dataField: 'data',
  },
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelIncludes: ['swiper'],
  routes: [],
  fastRefresh: {},
  mfsu: {},
  dynamicImport: {},
  mock: {},
  request: {
    dataField: 'data',
  },
});

import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-stencil-components',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: false
    },
  ],
};

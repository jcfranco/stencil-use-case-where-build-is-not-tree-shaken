### Description

This repo demonstrates a bug where components are not tree-shaken properly from a rollup build when using `dist-custom-elements` + `autoDefineCustomElements: true` + `setAssetPath`

### Steps

#### tree-shaken build ✅

1. run `npm run build:tree-shaken`
2. inspect `public/main.js` and notice that only the imported component was included (~364 b)

#### non-tree-shaken build ❌

1. run `npm run build:not-tree-shaken`
2. inspect `public/main.js` and notice that it includes code for unrelated/non-imported component + more (~15 kb)
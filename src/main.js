import { setAssetPath } from '../dist/components';
import "../dist/components/my-component-a";

// assume components have assets
setAssetPath(document.currentScript.src);

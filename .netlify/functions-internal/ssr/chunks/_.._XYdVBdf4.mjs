export { renderers } from '../renderers.mjs';

const page = () => import('./pages/__dr360VEN.mjs').then(n => n._);

export { page };

// Reexport the native module. On web, it will be resolved to ScreenshotPreventerModule.web.ts
// and on native platforms to ScreenshotPreventerModule.ts
export { default } from './ScreenshotPreventerModule';
export { default as ScreenshotPreventerView } from './ScreenshotPreventerView';
export * from  './ScreenshotPreventer.types';

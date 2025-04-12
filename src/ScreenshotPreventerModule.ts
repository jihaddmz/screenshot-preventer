import { NativeModule, requireNativeModule } from 'expo';

import { ScreenshotPreventerModuleEvents } from './ScreenshotPreventer.types';

declare class ScreenshotPreventerModule extends NativeModule<ScreenshotPreventerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ScreenshotPreventerModule>('ScreenshotPreventer');

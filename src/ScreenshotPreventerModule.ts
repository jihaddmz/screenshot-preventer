import { NativeModule, requireNativeModule } from 'expo';

declare class ScreenshotPreventerModule extends NativeModule {
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ScreenshotPreventerModule>('ScreenshotPreventer');

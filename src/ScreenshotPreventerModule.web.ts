import { registerWebModule, NativeModule } from 'expo';

import { ScreenshotPreventerModuleEvents } from './ScreenshotPreventer.types';

class ScreenshotPreventerModule extends NativeModule<ScreenshotPreventerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ScreenshotPreventerModule);

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  enable(): void;
  disable(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ScreenshotPreventer');

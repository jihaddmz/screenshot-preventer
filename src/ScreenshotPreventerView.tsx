import { requireNativeView } from 'expo';
import * as React from 'react';

import { ScreenshotPreventerViewProps } from './ScreenshotPreventer.types';

const NativeView: React.ComponentType<ScreenshotPreventerViewProps> =
  requireNativeView('ScreenshotPreventer');

export default function ScreenshotPreventerView(props: ScreenshotPreventerViewProps) {
  return <NativeView {...props} />;
}

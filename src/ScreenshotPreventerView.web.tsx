import * as React from 'react';

import { ScreenshotPreventerViewProps } from './ScreenshotPreventer.types';

export default function ScreenshotPreventerView(props: ScreenshotPreventerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

/// @ts-nocheck

import { EventSubscription } from "expo-modules-core";
import ScreenshotBlockerModule from "./ScreenshotPreventerModule";

const emitter = ScreenshotBlockerModule;

export function addOnInactiveListener(listener: (event: any) => void): EventSubscription {
  return emitter.addListener("onInactive", listener);
}

export function addOnActiveListener(listener: (event: any) => void): EventSubscription {
  return emitter.addListener("onActive", listener);
}

export { default as ScreenshotPreventerView } from "./ScreenshotPreventerView";
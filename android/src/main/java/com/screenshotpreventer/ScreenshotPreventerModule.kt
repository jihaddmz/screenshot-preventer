package com.screenshotpreventer

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.view.WindowManager
import com.facebook.react.bridge.LifecycleEventListener
import android.app.Activity


@ReactModule(name = ScreenshotPreventerModule.NAME)
class ScreenshotPreventerModule(val reactContext: ReactApplicationContext) :
  NativeScreenshotPreventerSpec(reactContext), LifecycleEventListener {

    init {
      reactContext.addLifecycleEventListener(this)
    }

  override fun getName(): String {
    return NAME
  }

   override fun enable() {
    applySecureFlag(true)
        // try {
        //     currentActivity?.window?.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
        // } catch (e: Exception) {
        //   println(e)
        // }
    }

    override fun disable() {
      applySecureFlag(false)
        // try {
        //     currentActivity?.window?.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
        // } catch (e: Exception) {
        //   println(e)
        // }
    }

     private fun applySecureFlag(enable: Boolean) {
    val activity: Activity? = reactContext.currentActivity
    if (activity == null) {
      println("ScreenshotPreventer: currentActivity is null")
      return
    }

    activity.runOnUiThread {
      if (enable) {
        activity.window?.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
      } else {
        activity.window?.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
    }
  }

  companion object {
    const val NAME = "ScreenshotPreventer"
  }

  override fun onHostResume() {
    // applySecureFlag(isEnabled)
  }

  override fun onHostPause() {
    // 
  }
  override fun onHostDestroy() {
    // 
  }
}

import ExpoModulesCore

public class ScreenshotPreventerModule: Module {
   private var hasListeners = false
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ScreenshotPreventer')` in JavaScript.
    Name("ScreenshotPreventer")

    View(ScreenshotPreventerView.self) {}

        Events("onInactive")
        Events("onActive")

        OnStartObserving {
          self.hasListeners = true

          NotificationCenter.default.addObserver(
                  self,
                  selector: #selector(self.appWillResignActive),
                  name: UIApplication.willResignActiveNotification,
                  object: nil
                )

                NotificationCenter.default.addObserver(
                              self,
                              selector: #selector(self.didBecomeActiveNotification),
                              name: UIApplication.didBecomeActiveNotification,
                              object: nil
                            )
        }

        OnStopObserving {
          self.hasListeners = false
          NotificationCenter.default.removeObserver(self, name: UIApplication.willResignActiveNotification, object: nil)
          NotificationCenter.default.removeObserver(self, name: UIApplication.didBecomeActiveNotification, object: nil)
        }
      }

      @objc
        func appWillResignActive() {
          sendEvent("onInactive", ["timestamp": Date().timeIntervalSince1970])
        }

        @objc
            func didBecomeActiveNotification() {
              sendEvent("onActive", ["timestamp": Date().timeIntervalSince1970])
            }
}

#import "ScreenshotPreventer.h"
#import <React/RCTUtils.h>
#import <UIKit/UIKit.h>

@implementation ScreenshotPreventer {
  UIView *_blurOverlay;
}

RCT_EXPORT_MODULE(ScreenshotPreventer)

- (void)appWillResignActive {
  dispatch_async(dispatch_get_main_queue(), ^{
    if (!_blurOverlay) {
      _blurOverlay = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
      _blurOverlay.backgroundColor = [UIColor colorWithWhite:0 alpha:0.8];

      UIVisualEffect *blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
      UIVisualEffectView *blurEffectView = [[UIVisualEffectView alloc] initWithEffect:blurEffect];
      blurEffectView.frame = _blurOverlay.bounds;
      blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

      [_blurOverlay addSubview:blurEffectView];
    }

    UIWindow *keyWindow = RCTSharedApplication().keyWindow;
    if (keyWindow && !_blurOverlay.superview) {
      [keyWindow addSubview:_blurOverlay];
    }
  });
}

- (void)appDidBecomeActive {
  dispatch_async(dispatch_get_main_queue(), ^{
    [_blurOverlay removeFromSuperview];
    _blurOverlay = nil;
  });
}

- (void)enable {
  [self disable]; // clear existing observers

  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(appWillResignActive)
                                               name:UIApplicationWillResignActiveNotification
                                             object:nil];

  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(appDidBecomeActive)
                                               name:UIApplicationDidBecomeActiveNotification
                                             object:nil];
}

- (void)disable {
  [[NSNotificationCenter defaultCenter] removeObserver:self
                                                  name:UIApplicationWillResignActiveNotification
                                                object:nil];

  [[NSNotificationCenter defaultCenter] removeObserver:self
                                                  name:UIApplicationDidBecomeActiveNotification
                                                object:nil];

  dispatch_async(dispatch_get_main_queue(), ^{
    [_blurOverlay removeFromSuperview];
    _blurOverlay = nil;
  });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeScreenshotPreventerSpecJSI>(params);
}

@end

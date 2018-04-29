# Variable-Speed-Player

通过 HTML5 的 `<video>` 的 `playbackRate` 属性实现变速播放媒体。

这个项目是我为了加速英语听力而开坑的，因为一般的播放器在加速播放时音频都不可避免地被提高音调，而 HTML5 的媒体播放的加速则不会。

优点：

- 网页，方便随时随地使用。
- 使用 [Material Components for the Web](https://material.io/components/web/) 设计，界面美观。
- 简单易用。
- 支持 ServiceWorker 离线缓存。

缺点：

- 媒体播放基于浏览器支持，支持格式较少。
- 移动端使用困难。

## FAQs

- **Q:** 为什么一般的播放器在加速播放时音频都不可避免地被提高音调？
- **A:** 由于播放速度提高了，同一段声波在更短的时间内播放，声波的波长会缩短，因而音调被提高了。

- **Q:** 为什么 HTML5 的媒体播放的加速不会提高音调？
- **A:** 我也不知道。

- **Q:** 如何解决格式支持的问题？
- **A:** 你可以试试带有 `FFmpeg` 的 [Electron](https://electronjs.org/)。
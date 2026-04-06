import { LyricLineMouseEvent } from '@applemusic-like-lyrics/core';
import { LyricPlayerRef } from '@applemusic-like-lyrics/react';
export interface Callback<Args extends unknown[], Result = void> {
    onEmit?: (...args: Args) => Result;
}
/**
 * 当点击歌曲专辑图上方的控制横条（thumb）时触发。
 * 通常用于关闭歌词页面。
 */
export declare const onClickControlThumbAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当点击音质标签时触发。
 * 通常用于打开音质详情对话框。
 */
export declare const onClickAudioQualityTagAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户试图打开菜单时触发。
 */
export declare const onRequestOpenMenuAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户请求播放或从暂停中恢复时触发。
 */
export declare const onPlayOrResumeAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户请求暂停播放时触发。
 */
export declare const onPauseAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户请求播放上一首歌曲时触发。
 */
export declare const onRequestPrevSongAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户请求播放下一首歌曲时触发。
 */
export declare const onRequestNextSongAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户通过拖动进度条等方式请求跳转到指定播放位置时触发。
 * @param position - 目标播放位置，单位为毫秒。
 */
export declare const onSeekPositionAtom: import('jotai').PrimitiveAtom<Callback<[_position: number], void>> & {
    init: Callback<[_position: number], void>;
};
/**
 * 当用户点击某一行歌词时触发。
 * 通常用于跳转到该行歌词的起始时间。
 * @param _evt - 歌词行事件对象。
 * @param _playerRef - 播放器引用。
 */
export declare const onLyricLineClickAtom: import('jotai').PrimitiveAtom<Callback<[_evt: LyricLineMouseEvent, _playerRef: LyricPlayerRef | null], void>> & {
    init: Callback<[_evt: LyricLineMouseEvent, _playerRef: LyricPlayerRef | null], void>;
};
/**
 * 当用户试图对歌词行打开上下文菜单（例如右键点击）时触发。
 * @param _evt - 歌词行事件对象。
 * @param _playerRef - 播放器引用。
 */
export declare const onLyricLineContextMenuAtom: import('jotai').PrimitiveAtom<Callback<[_evt: LyricLineMouseEvent, _playerRef: LyricPlayerRef | null], void>> & {
    init: Callback<[_evt: LyricLineMouseEvent, _playerRef: LyricPlayerRef | null], void>;
};
/**
 * 当用户通过音量滑块请求改变音量时触发。
 * @param volume - 目标音量，取值范围为 [0-100]。
 */
export declare const onChangeVolumeAtom: import('jotai').PrimitiveAtom<Callback<[_volume: number], void>> & {
    init: Callback<[_volume: number], void>;
};
/**
 * 当用户请求切换随机播放模式时触发。
 */
export declare const onToggleShuffleAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
/**
 * 当用户请求切换重复播放模式时触发。
 */
export declare const onCycleRepeatModeAtom: import('jotai').PrimitiveAtom<Callback<[], void>> & {
    init: Callback<[], void>;
};
//# sourceMappingURL=callbacks.d.ts.map
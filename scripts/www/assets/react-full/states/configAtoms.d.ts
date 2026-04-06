import { LyricPlayerBase } from '@applemusic-like-lyrics/core';
import { BackgroundRenderProps } from '@applemusic-like-lyrics/react';
/**
 * 定义了播放器底部控制区域的显示模式。
 * - `Controls`: 显示播放控制按钮。
 * - `FFT`: 显示音频频谱图。
 * - `None`: 不显示任何内容。
 */
export declare enum PlayerControlsType {
    Controls = "controls",
    FFT = "fft",
    None = "none"
}
/**
 * 定义了垂直布局下，隐藏歌词时专辑封面的布局模式。
 * - `Auto`: 根据封面是否为视频自动切换为沉浸式布局。
 * - `ForceNormal`: 强制使用标准布局。
 * - `ForceImmersive`: 强制使用沉浸式布局。
 */
export declare enum VerticalCoverLayout {
    Auto = "auto",
    ForceNormal = "force-normal",
    ForceImmersive = "force-immersive"
}
/**
 * 定义了可用的歌词渲染器实现枚举。
 */
export declare enum LyricPlayerImplementation {
    Dom = "dom",
    DomSlim = "dom-slim",
    Canvas = "canvas"
}
/**
 * 定义了歌词大小的预设值常量。
 */
export declare const LyricSizePreset: {
    readonly Tiny: "tiny";
    readonly ExtraSmall: "extra-small";
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Large: "large";
    readonly ExtraLarge: "extra-large";
    readonly Huge: "huge";
};
/**
 * 从预设值常量生成具体的类型。
 */
export type LyricSizePresetValue = (typeof LyricSizePreset)[keyof typeof LyricSizePreset];
export type LyricPlayerImplementationObject = {
    lyricPlayer?: {
        new (...args: ConstructorParameters<typeof LyricPlayerBase>): LyricPlayerBase;
    };
};
/**
 * 歌词播放组件的实现类型
 */
export declare const lyricPlayerImplementationAtom: import('jotai').PrimitiveAtom<LyricPlayerImplementationObject> & {
    init: LyricPlayerImplementationObject;
};
/**
 * 是否启用歌词行模糊效果。性能影响：高。
 */
export declare const enableLyricLineBlurEffectAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否启用歌词行缩放效果。性能影响：无。
 */
export declare const enableLyricLineScaleEffectAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否启用歌词行弹簧动画效果。如果禁用，则回退到基础的 CSS 动画。性能影响：中。
 */
export declare const enableLyricLineSpringAnimationAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否显示翻译歌词行。性能影响：低。
 */
export declare const enableLyricTranslationLineAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否显示音译歌词行。性能影响：低。
 */
export declare const enableLyricRomanLineAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否交换音译和翻译歌词行的显示位置。性能影响：无。
 */
export declare const enableLyricSwapTransRomanLineAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 调节逐词歌词的渐变过渡宽度（单位为一个全角字宽）。
 * 0.5 模拟 Apple Music for iPad；1 模拟 Android；0 则关闭效果。
 */
export declare const lyricWordFadeWidthAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 设置歌词组件的字体家族（CSS Font Family）。
 */
export declare const lyricFontFamilyAtom: import('jotai').WritableAtom<string, [string | typeof import('jotai/utils').RESET | ((prev: string) => string | typeof import('jotai/utils').RESET)], void>;
/**
 * 设置歌词组件的字体字重（CSS Font Weight）。
 */
export declare const lyricFontWeightAtom: import('jotai').WritableAtom<string | number, [string | number | typeof import('jotai/utils').RESET | ((prev: string | number) => string | number | typeof import('jotai/utils').RESET)], void>;
/**
 * 设置歌词组件的字符间距（CSS Letter Spacing）。
 */
export declare const lyricLetterSpacingAtom: import('jotai').WritableAtom<string, [string | typeof import('jotai/utils').RESET | ((prev: string) => string | typeof import('jotai/utils').RESET)], void>;
/**
 * 调节全局歌词时间戳位移，单位毫秒。正值为提前，负值为推迟。
 */
export declare const globalLyricTimelineOffsetAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 歌词字体大小的预设选项。
 */
export declare const lyricSizePresetAtom: import('jotai').WritableAtom<LyricSizePresetValue, [LyricSizePresetValue | typeof import('jotai/utils').RESET | ((prev: LyricSizePresetValue) => LyricSizePresetValue | typeof import('jotai/utils').RESET)], void>;
/**
 * 播放器底部控制区域的显示模式。
 */
export declare const playerControlsTypeAtom: import('jotai').WritableAtom<PlayerControlsType, [typeof import('jotai/utils').RESET | PlayerControlsType | ((prev: PlayerControlsType) => typeof import('jotai/utils').RESET | PlayerControlsType)], void>;
/**
 * 是否显示歌曲名称。
 */
export declare const showMusicNameAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 垂直布局下隐藏歌词时的专辑图布局模式。
 */
export declare const verticalCoverLayoutAtom: import('jotai').WritableAtom<VerticalCoverLayout, [typeof import('jotai/utils').RESET | VerticalCoverLayout | ((prev: VerticalCoverLayout) => typeof import('jotai/utils').RESET | VerticalCoverLayout)], void>;
/**
 * 是否显示歌曲创作者。
 */
export declare const showMusicArtistsAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否显示歌曲专辑名称。
 */
export declare const showMusicAlbumAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否显示音量控制滑块。
 */
export declare const showVolumeControlAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否显示底部控制按钮组。
 */
export declare const showBottomControlAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
export type LyricBackgroundRenderer = {
    renderer?: BackgroundRenderProps["renderer"] | string;
};
/**
 * 配置所使用的歌词背景渲染器。
 */
export declare const lyricBackgroundRendererAtom: import('jotai').PrimitiveAtom<LyricBackgroundRenderer> & {
    init: LyricBackgroundRenderer;
};
/**
 * 当背景渲染器设置为纯色或CSS背景时，使用此值。
 */
export declare const cssBackgroundPropertyAtom: import('jotai').WritableAtom<string, [string | typeof import('jotai/utils').RESET | ((prev: string) => string | typeof import('jotai/utils').RESET)], void>;
/**
 * 调节背景的最大渲染帧率。性能影响：高。
 */
export declare const lyricBackgroundFPSAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 调节背景的渲染倍率。较低的值可以提升性能。性能影响：高。
 */
export declare const lyricBackgroundRenderScaleAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否启用背景静态模式。启用后，背景只在必要时重绘，以优化性能。性能影响：中。
 */
export declare const lyricBackgroundStaticModeAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 控制歌词播放页面是否可见。
 * 推荐在页面被隐藏时设置为 false，以暂停动画和渲染，优化性能。
 */
export declare const isLyricPageOpenedAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
/**
 * 是否强制隐藏歌词视图（即使有歌词数据）。
 */
export declare const hideLyricViewAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 是否在进度条上显示剩余时间而非当前时间。
 */
export declare const showRemainingTimeAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
/**
 * 用于音频可视化频谱图的数据采样频率范围。
 */
export declare const fftDataRangeAtom: import('jotai').WritableAtom<[number, number], [typeof import('jotai/utils').RESET | [number, number] | ((prev: [number, number]) => typeof import('jotai/utils').RESET | [number, number])], void>;
//# sourceMappingURL=configAtoms.d.ts.map
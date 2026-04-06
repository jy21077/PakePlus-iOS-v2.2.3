import { LyricLine } from '@applemusic-like-lyrics/lyric';
/**
 * 艺术家信息的标准结构
 */
export interface ArtistStateEntry {
    name: string;
    id: string;
}
/**
 * 音频质量的类型枚举
 */
export declare enum AudioQualityType {
    None = "none",
    Standard = "standard",
    Lossless = "lossless",
    HiResLossless = "hi-res-lossless",
    DolbyAtmos = "dolby-atmos"
}
/**
 * 描述音频质量完整信息的接口
 */
export interface MusicQualityState {
    type: AudioQualityType;
    codec: string;
    channels: number;
    sampleRate: number;
    sampleFormat: string;
}
/**
 * 当前播放歌曲的唯一标识符
 */
export declare const musicIdAtom: import('jotai').WritableAtom<string | null, [string | typeof import('jotai/utils').RESET | ((prev: string | null) => string | typeof import('jotai/utils').RESET | null) | null], void>;
/**
 * 当前播放的音乐名称
 */
export declare const musicNameAtom: import('jotai').PrimitiveAtom<string> & {
    init: string;
};
/**
 * 当前播放的音乐创作者列表
 */
export declare const musicArtistsAtom: import('jotai').PrimitiveAtom<ArtistStateEntry[]> & {
    init: ArtistStateEntry[];
};
/**
 * 当前播放的音乐所属专辑名称
 */
export declare const musicAlbumNameAtom: import('jotai').PrimitiveAtom<string> & {
    init: string;
};
/**
 * 当前播放的音乐专辑封面 URL
 * 除了图片也可以是视频资源
 */
export declare const musicCoverAtom: import('jotai').PrimitiveAtom<string> & {
    init: string;
};
/**
 * 当前播放的音乐专辑封面资源是否为视频
 */
export declare const musicCoverIsVideoAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
/**
 * 当前音乐的总时长，单位为毫秒
 */
export declare const musicDurationAtom: import('jotai').PrimitiveAtom<number> & {
    init: number;
};
/**
 * 当前音乐是否正在播放
 */
export declare const musicPlayingAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
/**
 * 当前音乐的播放进度，单位为毫秒
 */
export declare const musicPlayingPositionAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 当前播放的音乐音量大小，范围在 [0.0-1.0] 之间
 */
export declare const musicVolumeAtom: import('jotai').WritableAtom<number, [number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)], void>;
/**
 * 当前播放的音乐的歌词行数据
 */
export declare const musicLyricLinesAtom: import('jotai').PrimitiveAtom<LyricLine[]> & {
    init: LyricLine[];
};
/**
 * 当前音乐的音质信息对象
 */
export declare const musicQualityAtom: import('jotai').PrimitiveAtom<MusicQualityState> & {
    init: MusicQualityState;
};
/**
 * 根据音质信息生成的、用于UI展示的标签内容
 * 如果为 null，则不显示标签
 */
export declare const musicQualityTagAtom: import('jotai').PrimitiveAtom<{
    tagIcon: boolean;
    tagText: string;
    isDolbyAtmos: boolean;
} | null> & {
    init: {
        tagIcon: boolean;
        tagText: string;
        isDolbyAtmos: boolean;
    } | null;
};
/**
 * 用于音频可视化频谱图的实时频域数据
 */
export declare const fftDataAtom: import('jotai').PrimitiveAtom<number[]> & {
    init: number[];
};
/**
 * 代表低频部分的音量大小，用于背景脉动等效果
 * 取值范围建议在 [0.0-1.0] 之间
 */
export declare const lowFreqVolumeAtom: import('jotai').PrimitiveAtom<number> & {
    init: number;
};
/**
 * 歌词偏移量，单位为毫秒
 */
export declare const musicLyricOffsetAtom: import('jotai').PrimitiveAtom<number> & {
    init: number;
};
//# sourceMappingURL=dataAtoms.d.ts.map
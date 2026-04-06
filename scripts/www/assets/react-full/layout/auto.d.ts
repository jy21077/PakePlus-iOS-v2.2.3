import { default as React, HTMLProps } from 'react';
/**
 * 会根据当前元素的宽高比自动选择横向或者纵向布局的组件
 */
export declare const AutoLyricLayout: React.FC<{
    thumbSlot?: React.ReactNode;
    controlsSlot?: React.ReactNode;
    horizontalBottomControls?: React.ReactNode;
    smallControlsSlot?: React.ReactNode;
    bigControlsSlot?: React.ReactNode;
    coverSlot?: React.ReactNode;
    lyricSlot?: React.ReactNode;
    backgroundSlot?: React.ReactNode;
    hideLyric?: boolean;
    verticalImmerseCover?: boolean;
    onLayoutChange?: (isVertical: boolean) => void;
    onElementMounted?: (node: HTMLDivElement | null) => void;
} & HTMLProps<HTMLDivElement>>;
//# sourceMappingURL=auto.d.ts.map
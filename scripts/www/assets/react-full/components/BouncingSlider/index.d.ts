import { default as React } from 'react';
export interface SliderProps {
    className?: string;
    style?: React.CSSProperties;
    value: number;
    min: number;
    max: number;
    isPlaying?: boolean;
    onChange?: (v: number) => void;
    onAfterChange?: (v: number) => void;
    onBeforeChange?: () => void;
    onSeeking?: (v: boolean) => void;
    beforeIcon?: React.ReactNode;
    afterIcon?: React.ReactNode;
    changeOnDrag?: boolean;
}
export declare const BouncingSlider: React.FC<SliderProps>;
//# sourceMappingURL=index.d.ts.map
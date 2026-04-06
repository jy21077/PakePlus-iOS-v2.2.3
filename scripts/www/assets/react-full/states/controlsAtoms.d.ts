export declare enum RepeatMode {
    Off = "off",
    One = "one",
    All = "all"
}
export declare const isShuffleActiveAtom: import('jotai').WritableAtom<boolean, [boolean | typeof import('jotai/utils').RESET | ((prev: boolean) => boolean | typeof import('jotai/utils').RESET)], void>;
export declare const repeatModeAtom: import('jotai').WritableAtom<RepeatMode, [typeof import('jotai/utils').RESET | RepeatMode | ((prev: RepeatMode) => typeof import('jotai/utils').RESET | RepeatMode)], void>;
export declare const toggleShuffleActionAtom: import('jotai').WritableAtom<null, [], void> & {
    init: null;
};
export declare const cycleRepeatModeActionAtom: import('jotai').WritableAtom<null, [], void> & {
    init: null;
};
//# sourceMappingURL=controlsAtoms.d.ts.map
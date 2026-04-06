import { FC, HTMLProps, ReactNode } from 'react';
import { PrebuiltToggleIconButtonType } from './prebuilt-enum';
export declare const ToggleIconButton: FC<{
    uncheckedIcon: ReactNode;
    checkedIcon: ReactNode;
    checked?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, "type">>;
export declare const PrebuiltToggleIconButton: FC<{
    type: PrebuiltToggleIconButtonType;
    checked?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, "type">>;
//# sourceMappingURL=index.d.ts.map
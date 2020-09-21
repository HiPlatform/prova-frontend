import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
export declare const LastIndexContext: React.Context<number>;
export interface SpaceProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    size?: SizeType | number;
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
}
declare const Space: React.FC<SpaceProps>;
export default Space;

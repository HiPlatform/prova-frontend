import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
export interface ItemProps {
    className: string;
    children: React.ReactNode;
    index: number;
    direction?: 'horizontal' | 'vertical';
    size?: SizeType | number;
    marginDirection: 'marginLeft' | 'marginRight';
}
export default function Item({ className, direction, index, size, marginDirection, children, }: ItemProps): JSX.Element | null;

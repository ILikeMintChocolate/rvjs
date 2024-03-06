import { ElementBlock } from '../dom/elementBlock.ts';
import { ComponentBlock } from '../dom/componentBlock.ts';
import { ForRender } from '../reactive/children/for.ts';
import { SwitchRender } from '../reactive/children/switch.ts';

export type AnyBlock = ElementBlock | ComponentBlock;
export type DynamicChildren = ForRender | SwitchRender;
export type Children = (AnyBlock | DynamicChildren)[];

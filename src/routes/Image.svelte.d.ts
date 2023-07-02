import { SvelteComponentTyped } from "svelte";
import type { Picture } from 'vite-imagetools';
declare const __propDef: {
    props: {
        data: Picture;
        alt?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        pad?: boolean | undefined;
        round?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImageProps = typeof __propDef.props;
export type ImageEvents = typeof __propDef.events;
export type ImageSlots = typeof __propDef.slots;
export default class Image extends SvelteComponentTyped<ImageProps, ImageEvents, ImageSlots> {
}
export {};

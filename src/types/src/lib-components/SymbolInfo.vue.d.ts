declare const _default: import("vue").DefineComponent<{
    options: {
        type: ObjectConstructor;
        default: () => {
            symbol: string;
            width: number;
            locale: string;
            colorTheme: string;
            isTransparent: boolean;
        };
    };
}, {
    container: import("vue").Ref<string>;
    tradingview: import("vue").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ObjectConstructor;
        default: () => {
            symbol: string;
            width: number;
            locale: string;
            colorTheme: string;
            isTransparent: boolean;
        };
    };
}>>, {
    options: Record<string, any>;
}>;
export default _default;

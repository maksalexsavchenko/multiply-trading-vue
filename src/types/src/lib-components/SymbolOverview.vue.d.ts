declare global {
    interface Window {
        TradingView: any;
    }
}
declare const _default: import("vue").DefineComponent<{
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    container: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    options: Record<string, any>;
}>;
export default _default;

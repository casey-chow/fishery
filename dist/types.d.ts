export declare type DeepPartial<T> = {
    [P in keyof T]?: unknown extends T[P] ? T[P] : T[P] extends Array<any> ? T[P] : DeepPartial<T[P]>;
};
export declare type GeneratorFnOptions<T, I, C> = {
    sequence: number;
    afterBuild: (fn: HookFn<T>) => any;
    afterCreate: (fn: AfterCreateFn<C>) => any;
    onCreate: (fn: OnCreateFn<T, C>) => any;
    params: DeepPartial<T>;
    associations: Partial<T>;
    transientParams: Partial<I>;
};
export declare type GeneratorFn<T, I, C> = (opts: GeneratorFnOptions<T, I, C>) => T;
export declare type HookFn<T> = (object: T) => any;
export declare type OnCreateFn<T, C = T> = (object: T) => C | Promise<C>;
export declare type AfterCreateFn<C> = (object: C) => C | Promise<C>;
export declare type BuildOptions<T, I> = {
    associations?: Partial<T>;
    transient?: Partial<I>;
};

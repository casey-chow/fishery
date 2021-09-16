import { GeneratorFn, HookFn, DeepPartial, OnCreateFn, AfterCreateFn } from './types';
export declare class FactoryBuilder<T, I, C> {
    private generator;
    private sequence;
    private params;
    private transientParams;
    private associations;
    private afterBuilds;
    private afterCreates;
    private onCreate?;
    constructor(generator: GeneratorFn<T, I, C>, sequence: number, params: DeepPartial<T>, transientParams: Partial<I>, associations: Partial<T>, afterBuilds: HookFn<T>[], afterCreates: AfterCreateFn<C>[], onCreate?: OnCreateFn<T, C> | undefined);
    build(): T;
    create(): Promise<C>;
    setAfterBuild: (hook: HookFn<T>) => void;
    setAfterCreate: (hook: AfterCreateFn<C>) => void;
    setOnCreate: (hook: OnCreateFn<T, C>) => void;
    _mergeParamsOntoObject(object: T): void;
    _callAfterBuilds(object: T): void;
    _callOnCreate(object: T): Promise<C>;
    _callAfterCreates(object: C): Promise<C>;
}

import { DeepPartial, GeneratorFn, BuildOptions, GeneratorFnOptions, HookFn, OnCreateFn, AfterCreateFn } from './types';
import { FactoryBuilder } from './builder';
export declare class Factory<T, I = any, C = T> {
    private readonly generator;
    private id;
    private _afterBuilds;
    private _afterCreates;
    private _onCreate?;
    private _associations;
    private _params;
    private _transient;
    constructor(generator: (opts: GeneratorFnOptions<T, I, C>) => T);
    /**
     * Define a factory.
     * @template T The object the factory builds
     * @template I The transient parameters that your factory supports
     * @template C The class of the factory object being created.
     * @param generator - your factory function
     */
    static define<T, I = any, C = T, F = Factory<T, I, C>>(this: new (generator: GeneratorFn<T, I, C>) => F, generator: GeneratorFn<T, I, C>): F;
    /**
     * Build an object using your factory
     * @param params
     * @param options
     */
    build(params?: DeepPartial<T>, options?: BuildOptions<T, I>): T;
    buildList(number: number, params?: DeepPartial<T>, options?: BuildOptions<T, I>): T[];
    /**
     * Asynchronously create an object using your factory.
     * @param params
     * @param options
     */
    create(params?: DeepPartial<T>, options?: BuildOptions<T, I>): Promise<C>;
    createList(number: number, params?: DeepPartial<T>, options?: BuildOptions<T, I>): Promise<C[]>;
    /**
     * Extend the factory by adding a function to be called after an object is built.
     * @param afterBuildFn - the function to call. It accepts your object of type T. The value this function returns gets returned from "build"
     * @returns a new factory
     */
    afterBuild(afterBuildFn: HookFn<T>): this;
    /**
     * Define a transform that occurs when `create` is called on the factory. Specifying an `onCreate` overrides any previous `onCreate`s.
     * To return a different type from `build`, specify a third type argument when defining the factory.
     * @param onCreateFn - The function to call. IT accepts your object of type T.
     * The value this function returns gets returned from "create" after any
     * `afterCreate`s are run
     * @return a new factory
     */
    onCreate(onCreateFn: OnCreateFn<T, C>): this;
    /**
     * Extend the factory by adding a function to be called after creation. This is called after `onCreate` but before the object is returned from `create`.
     * If multiple are defined, they are chained.
     * @param afterCreateFn
     * @return a new factory
     */
    afterCreate(afterCreateFn: AfterCreateFn<C>): this;
    /**
     * Extend the factory by adding default associations to be passed to the factory when "build" is called
     * @param associations
     * @returns a new factory
     */
    associations(associations: Partial<T>): this;
    /**
     * Extend the factory by adding default parameters to be passed to the factory when "build" is called
     * @param params
     * @returns a new factory
     */
    params(params: DeepPartial<T>): this;
    /**
     * Extend the factory by adding default transient parameters to be passed to the factory when "build" is called
     * @param transient - transient params
     * @returns a new factory
     */
    transient(transient: Partial<I>): this;
    /**
     * Sets sequence back to its default value
     */
    rewindSequence(): void;
    protected clone<F extends Factory<T, I, C>>(this: F): F;
    protected sequence(): number;
    protected builder(params?: DeepPartial<T>, options?: BuildOptions<T, I>): FactoryBuilder<T, I, C>;
}

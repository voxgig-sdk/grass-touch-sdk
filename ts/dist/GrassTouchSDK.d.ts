import { GetGrassTouchStatusEntity } from './entity/GetGrassTouchStatusEntity';
export type * from './GrassTouchTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GrassTouchEntityBase } from './GrassTouchEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class GrassTouchSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetGrassTouchStatus(entopts?: Record<string, any>): GetGrassTouchStatusEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GrassTouchSDK;
    tester(testopts?: any, sdkopts?: any): GrassTouchSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GrassTouchSDK;
export { stdutil, config, BaseFeature, GrassTouchEntityBase, GrassTouchSDK, SDK, };

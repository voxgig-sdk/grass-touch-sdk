import { Context } from './Context';
declare class GrassTouchError extends Error {
    isGrassTouchError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GrassTouchError };

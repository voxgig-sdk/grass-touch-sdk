import { GrassTouchEntityBase } from '../GrassTouchEntityBase';
import type { GrassTouchSDK } from '../GrassTouchSDK';
import type { Control } from '../types';
import type { GetGrassTouchStatus, GetGrassTouchStatusLoadMatch } from '../GrassTouchTypes';
declare class GetGrassTouchStatusEntity extends GrassTouchEntityBase<GetGrassTouchStatus> {
    constructor(client: GrassTouchSDK, entopts: any);
    make(this: GetGrassTouchStatusEntity): GetGrassTouchStatusEntity;
    load(this: any, reqmatch?: GetGrassTouchStatusLoadMatch, ctrl?: Control): Promise<GetGrassTouchStatusEntity>;
}
export { GetGrassTouchStatusEntity };

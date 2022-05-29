import { ApiService } from './api.service';

export type ApiServiceType = ApiService;

export const ApiProxy = (): ApiServiceType => {    
    return new ApiService();
};
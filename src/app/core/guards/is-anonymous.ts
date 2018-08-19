import { CanActivate } from "@angular/router";

export class isAnonymous implements CanActivate{
    canActivate(){
        return true;
    }
}
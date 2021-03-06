﻿/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Controllers {
    import C = DeBiese.NgResources.Part2.Common;

    export class HelpController {
        static $inject: Array<string> = [DeBiese.Common.Resources.ResourceProvider.id];
        static id: string = 'helpController';
        
        constructor(private resourceSvc: DeBiese.Common.Resources.IResourceService) {
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part2.Controllers.HelpController.id, DeBiese.NgResources.Part2.Controllers.HelpController);
}
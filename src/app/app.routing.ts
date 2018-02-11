import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabHeaders } from "./tab-headers";

const routes: Routes = TabHeaders.map(
    function (tabHeader) {
        return {
            path: tabHeader["path"],
	    component: tabHeader["component"]
	};
    }
);
routes.push({
    path: "",
    redirectTo: "home",
    pathMatch: "full"
});

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TabHeaders } from "../tab-headers";

@Component({
    selector: "tab-header",
    templateUrl: "./tab-header.component.html",
    styleUrls: ["./tab-header.component.css"]
})

export class TabHeaderComponent implements OnInit {

    headerItems;

    constructor(private router: Router) {}

    btnClick(path) {
        this.router.navigateByUrl(path);
    }

    ngOnInit() {
        this.headerItems = TabHeaders.sort(
            function (a, b) {
                return a["order"] - b["order"];
            }
	);
    }
}

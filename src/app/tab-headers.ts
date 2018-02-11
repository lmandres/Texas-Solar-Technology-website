import { TabHeader } from "./tab-header";
import { HomeComponent } from "./pages/home/home.component";

export const TabHeaders: TabHeader[] = [
    {
        title: "Home",
	path: "home",
	order: 1,
        component: HomeComponent
    }, {
        title: "Services",
        path: "services",
	order: 2,
	component: HomeComponent 
    }, {
        title: "Technologies",
	path: "technologies",
	order: 3,
	component: HomeComponent 
    }, {
        title: "About Us",
	path: "aboutus",
	order: 4,
	component: HomeComponent 
    }, {
        title: "Contact",
	path: "contact",
	order: 5,
	component: HomeComponent 
    }
];

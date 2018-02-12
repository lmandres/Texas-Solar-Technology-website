import { TabHeader } from "./tab-header";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { TechnologiesComponent } from "./pages/technologies/technologies.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";

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
	component: ServicesComponent 
    }, {
        title: "Technologies",
	path: "technologies",
	order: 3,
	component: TechnologiesComponent 
    }, {
        title: "About Us",
	path: "about",
	order: 4,
	component: AboutComponent 
    }, {
        title: "Contact",
	path: "contact",
	order: 5,
	component: ContactComponent 
    }
];

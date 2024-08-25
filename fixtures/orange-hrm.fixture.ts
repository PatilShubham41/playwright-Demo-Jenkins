import { test as baseTest } from "@playwright/test"
import LoginPage from "../pages/login.page";
import HomePage from "../pages/home.page";
import PIMPage from "../pages/PIM.page";
import AddEmployeePage from "../pages/addEmployee.page";
import PersonalDetailsPage from "../pages/personalDetails.page";
import AdminPage from "../pages/admin.page";


type AppPages = {
    hrmHome: HomePage,
    hrmPIM: PIMPage,
    hrmAddEmployee: AddEmployeePage,
    hrmPersonalDetails: PersonalDetailsPage,
    hrmAdmin: AdminPage
}

export const test = baseTest.extend<AppPages>({
    hrmHome: async({page}, use) =>{
        await page.goto('/');
        const homePage = new HomePage(page);
        await use(homePage);

    },
    hrmPIM: async({page}, use) =>{
        const pimPage = new PIMPage(page);
        await use(pimPage)
    },
    hrmAddEmployee: async ({page}, use) =>{
        const addEmployee = new AddEmployeePage(page);
        await use(addEmployee);
    },
    hrmPersonalDetails: async({page}, use) =>{
        const personalDetails = new PersonalDetailsPage(page);
        await use(personalDetails);
    },
    hrmAdmin: async({page}, use) =>{
        const adminPage = new AdminPage(page);
        await use(adminPage);
    }
})
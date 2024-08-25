import { Page } from "@playwright/test";
import BasePage from "./base.page";


export default class AdminPage extends BasePage{
    constructor(protected page: Page){
        super(page);
    }

    public readonly getPageHeading = () => this.page.getByRole('heading', {name: 'Admin', level: 6});
}
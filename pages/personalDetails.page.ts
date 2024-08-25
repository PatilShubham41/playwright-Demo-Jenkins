import { Page } from "playwright-core";
import BasePage from "./base.page";


export default class PersonalDetailsPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    public pageHeading = () => this.page.getByRole('heading', { name: 'Personal Details' });
    

}

import { Page } from "@playwright/test";
import BasePage, { defaultBtnSelectionOptions } from "./base.page";

export type PIMPageButtons = 'Add' | 'Search';


export default class PIMPage extends BasePage {

    constructor(page: Page){
        super(page);
    }

    private readonly getButton = (buttonName: PIMPageButtons, selctionOption = defaultBtnSelectionOptions) => this.buttonLocator(buttonName, selctionOption);
    private readonly employeeIDField = () => this.page.locator("//label[normalize-space()='Employee Id']//parent::div//following-sibling::div/input");

    async clickAddBtn(){
        await this.getButton('Add').click();
    }

    getSearchBtn(){
        return this.getButton('Search');
    }

    async searchEmployeeWithID(empID: string){
        await this.employeeIDField().fill(empID);
        await this.getSearchBtn().click();
    }




}
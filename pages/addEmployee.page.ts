import { Page } from "@playwright/test";
import BasePage, { defaultBtnSelectionOptions } from "./base.page";

export type AddEmployeePageButtons = 'Save'

export default class AddEmployeePage extends BasePage{
    constructor(page: Page){
        super(page);
    }

    public readonly pageHeading = () => this.page.getByRole('heading', {level: 6, name: 'Add Employee'});
    private readonly userDetailsFields = (fieldName: 'First Name' | 'Last Name') => this.page.getByPlaceholder(fieldName);
    private readonly empolyeeID = () => this.page.locator("//label[normalize-space()='Employee Id']//parent::div//following-sibling::div/input");
    private readonly getButton = (buttonName: AddEmployeePageButtons, selctionOption = defaultBtnSelectionOptions) => this.buttonLocator(buttonName, selctionOption);

    async clickSaveBtn(){
        await this.getButton('Save').click();
    }

    async fillUserDetails(firstName: string, lastName: string){
        await this.userDetailsFields('First Name').fill(firstName);
        await this.userDetailsFields('Last Name').fill(lastName);
        const empID = await this.empolyeeID().innerText();
        await this.clickSaveBtn();
        return empID;
    }

}
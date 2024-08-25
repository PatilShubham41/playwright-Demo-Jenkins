import { Page } from "@playwright/test";

export type ButtonSelectionOptions = {
    exact: boolean,
    nth: number
}

export const defaultBtnSelectionOptions: ButtonSelectionOptions = {
    exact: false,
    nth: 0
}

export default abstract class BasePage{
    constructor(protected page: Page){}
    protected buttonLocator =  (buttonName: string, selctionOption = defaultBtnSelectionOptions) => this.page.getByRole('button', {name: buttonName, exact: selctionOption.exact}).nth(selctionOption.nth)
}
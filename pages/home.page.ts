import { Page } from "playwright-core";
import BasePage from "./base.page";

export type SidePanelLinks = 'Admin' | 'PIM'

export default class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    public readonly siteLogo = () => this.page.getByAltText('client brand banner');
    private readonly sideNavigationPanelLinks = (linkName: SidePanelLinks) => this.page.getByRole('link', {name: linkName, exact: true})
    
    async navigateToPIM(){
        await this.sideNavigationPanelLinks('PIM').click();
    }

    getAdminLink(){
        return this.sideNavigationPanelLinks('Admin');
    }

    async navigateToAdmin(){
        await this.getAdminLink().click()
    }



}
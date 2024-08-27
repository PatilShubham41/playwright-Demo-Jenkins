import { Page } from "playwright-core";
import BasePage from "./base.page";
import { expect } from "playwright/test";

export type SidePanelLinks = 'Admin' | 'PIM' | 'Leave' | 'Claim' | 'Recruitment'

export default class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    public readonly siteLogo = () => this.page.getByAltText('client brand banner');
    private readonly sideNavigationPanelLinks = (linkName: SidePanelLinks) => this.page.getByRole('link', {name: linkName, exact: true})
    private readonly pageHeading = () => this.page.locator('div.oxd-topbar-header-title').getByRole('heading', {level: 6}).first();

    async navigateToPIM(){
        await this.sideNavigationPanelLinks('PIM').click();
    }

    getAdminLink(){
        return this.sideNavigationPanelLinks('Admin');
    }

    async navigateToAdmin(){
        await this.getAdminLink().click()
    }

    async clickNaviagtionLink(sidePanelLink: SidePanelLinks): Promise<string>{
        const currHeading = await this.pageHeading().innerText()
        await this.sideNavigationPanelLinks(sidePanelLink).click();
        await expect(this.pageHeading()).not.toHaveText(currHeading)

        return await this.pageHeading().innerText();
    }



}
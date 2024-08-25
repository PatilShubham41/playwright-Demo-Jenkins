import { expect } from "@playwright/test";
import { test } from "../fixtures/orange-hrm.fixture";


test.describe('bunch of navigation panel test', async()=>{
    test('Navigate to PIM section', async({hrmHome, hrmPIM})=>{

        await expect(hrmHome.siteLogo()).toBeVisible();
        await hrmHome.navigateToPIM();

        await expect(hrmPIM.getSearchBtn()).toBeEnabled();
    })

    test('Navigation to Admin section', async({hrmHome, hrmAdmin})=>{

        await expect(hrmHome.getAdminLink()).toBeEnabled();
        await hrmHome.navigateToAdmin();
        await expect(hrmAdmin.getPageHeading()).toHaveText('Admin')

    })
})
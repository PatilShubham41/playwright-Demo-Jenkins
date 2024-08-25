import { expect } from "@playwright/test"
import { test } from "../fixtures/orange-hrm.fixture"



test.describe('bunch of login test', async()=>{
    test('valid login credentails', async ({hrmHome})=>{

        await expect(hrmHome.siteLogo()).toBeVisible();
        
    })

    
})

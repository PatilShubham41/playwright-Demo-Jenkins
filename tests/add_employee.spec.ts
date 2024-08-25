import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { test } from '../fixtures/orange-hrm.fixture'
import { owner, description, step, attachment } from 'allure-js-commons'

test('login to orange HRM application', async({ hrmHome, hrmPIM, hrmAddEmployee, hrmPersonalDetails })=>{


  await owner('Joe Doe');
  await description('allure report'),
  await step('Validating login success', async() =>{
    await expect(hrmHome.siteLogo()).toBeVisible();
    // await attachment('logged in page', await page.screenshot({fullpage: true}), 'image/png');
    
  })
  
  await test.step('Naviagting to PIM page', async()=>{
    await hrmHome.navigateToPIM();
    await hrmPIM.clickAddBtn();
    await expect(hrmAddEmployee.pageHeading()).toBeVisible();
  })


  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  let empID: string;
  await step('Adding employee', async()=>{
    empID = await hrmAddEmployee.fillUserDetails(firstName, lastName);
    console.log(empID); // TODO: add logger impl
    await expect(hrmPersonalDetails.pageHeading()).toBeVisible({timeout: 15_000})
  })

  await test.step('Search the and validate the created new employee', async()=>{
    await hrmHome.navigateToPIM();
    await hrmPIM.searchEmployeeWithID(empID);

  })
  
})



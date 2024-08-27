import { expect } from '@playwright/test';
import { test } from '../fixtures/orange-hrm.fixture';
import { SidePanelLinks } from '../pages/home.page';

[
{linkName: 'Admin', pageHeadingContains: 'Admin'},
{linkName: 'PIM', pageHeadingContains: 'PIM'},
{linkName: 'Leave', pageHeadingContains: 'Leave'},
{linkName: 'Claim', pageHeadingContains: 'Claim'},
{linkName: 'Recruitment', pageHeadingContains: 'Recruitment'},
].forEach(({linkName, pageHeadingContains}) => {

    test(`naviagtion bar link test for ${linkName}`, async({hrmHome}) =>{

        const pageheading = await hrmHome.clickNaviagtionLink(linkName as SidePanelLinks);
        expect(pageHeadingContains).toContain(pageheading);
    })

})


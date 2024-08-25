import { Page } from "@playwright/test";
import BasePage from "./base.page";


export default class LoginPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    private readonly username = () => this.page.getByRole('paragraph').filter({hasText: /Username/});
    private readonly password = () => this.page.getByRole('paragraph').filter({hasText: /Password/});
    private readonly loginFields = (fieldName: 'Username' | 'Password') => this.page.getByPlaceholder(fieldName);
    private readonly loginBtn = () => this.page.getByRole('button', {name: 'Login', exact: true});

    async getLoginDetails(){
        await this.page.goto('/');
        const username = await this.username().innerText();
        const password = await this.password().innerText();

        const [, actualUN] = username.split('Username : ');
        const [, actualPWD] = password.split('Password : ');

        return [actualUN, actualPWD] as const;
    }

    async doLogin(){

        const [username, password] = await this.getLoginDetails();
        await this.loginFields('Username').fill(username);
        await this.loginFields('Password').fill(password);
        await this.loginBtn().click()
    }
}
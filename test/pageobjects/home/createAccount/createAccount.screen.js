export default class CreateAccountScreen {
    // elements

    get btnEnter() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")') } 

    // interactions

    async clickBtnEnter() {
        await this.btnEnter.click()
    }
}
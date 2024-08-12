export default class Login {
    //elements

    get inpUser() { return $('android=new UiSelector().text("Nome de usuário")') }
    get inpPassword() { return $('android=new UiSelector().text("Senha")')}
    get btnEnter() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")')}
    get popUpError() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")')}

    //interactions

    async setValueInpUser(user) {
        await this.inpUser.setValue(user)
    }

    async setValueInpPassword(password) {
        await this.inpPassword.setValue(password)
    }

    async clickBtnEnter() {
        await this.btnEnter.click()
    }

    async getTextError() {
        return await this.popUpError.getText()
    }

    //actions

    async loginWithInvalidCredentials(user, password) {
        await this.setValueInpUser(user)
        await this.setValueInpPassword(password)
        await this.clickBtnEnter()
    }

}
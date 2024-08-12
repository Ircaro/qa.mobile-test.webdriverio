import LoginElementsScreen from "./login.elements.screen.js"

export default class LoginInteractionsScreen extends LoginElementsScreen {
    
    async setValueInpUser(user) {
        await super.inpUser.setValue(user)
    }

    async setValueInpPassword(password) {
        await super.inpPassword.setValue(password)
    }

    async clickBtnEnter() {
        await super.btnEnter.click()
    }

    async getTextError() {
        return await super.popUpError.getText()
    }

}

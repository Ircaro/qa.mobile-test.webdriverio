import LoginInteractionsScreen from "./login.interactions.screen.js";

export default class LoginActionsScreen extends LoginInteractionsScreen {

    async loginWithInvalidCredentials(user, password) {
        await super.setValueInpUser(user)
        await super.setValueInpPassword(password)
        await super.clickBtnEnter()
    }

}
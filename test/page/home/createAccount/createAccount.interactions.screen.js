import CreateAccountElementsScreen from "./createAccount.elements.screen.js";

export default class CreateAccountInteractionsScreen extends CreateAccountElementsScreen{
    async clickBtnEnter() {
        await super.btnEnter.click()
    }
}

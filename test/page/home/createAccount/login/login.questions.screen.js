import LoginInteractionsScreen from "./login.interactions.screen.js";

export default class LoginQuestionsScreen extends LoginInteractionsScreen {
    async isTheErrorTextTheSame(errorText) {
        expect(await super.getTextError()).toBe(errorText)
    }
}

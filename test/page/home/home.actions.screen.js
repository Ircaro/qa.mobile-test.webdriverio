import HomeInteractionsScreen from "./home.interactions.screen.js";

export default class HomeActionsScreen extends HomeInteractionsScreen {
    async searchText(text) {
        await super.clickInpSearch()
        await super.setValueInpSearchText(text)
    }

    async enterCreateAccountScreen () {
        await super.clickBtnMore()
        await super.clickBtnEnterOrJoin()
    }
}

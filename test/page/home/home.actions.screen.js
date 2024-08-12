import HomeInteractionsScreen from "./home.interactions.screen";

export default class HomeActionsScreen extends HomeInteractionsScreen {
    async searchText(text) {
        await super.clickInpSearch()
        await super.setValueInpSearchText(text)
    }
}

import HomeElementsScreen from "./home.elements.screen"

export default class HomeInteractionsScreen extends HomeElementsScreen{
    
    async clickInpSearch() {
        await super.inpSearch.click()
    }

    async setValueInpSearchText(text) {
        await super.inpSearchText.setValue(text)
    }

    async getTextSearched() {
        return await super.resultSearch.getText()
    }

    async clickBtnMore() {
        await super.btnMore.click()
    }

    async clickBtnEnterOrJoin() {
        await super.btnEnterOrJoin.click()
    }

}

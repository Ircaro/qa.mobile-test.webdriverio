import HomeInteractionsScreen from "./home.interactions.screen.js"

export default class HomeQuestionsScreen extends HomeInteractionsScreen{ 
    async isTheTextSame(text) {
        expect(await super.getTextSearched()).toBe(text)
    }
    
}

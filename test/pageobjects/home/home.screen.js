export default class HomeScreen {
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")') }
    get inpSearchText() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')}
    get resultSearch() {return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list").childSelector(new UiSelector().className("android.view.ViewGroup").instance(0)).childSelector(new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title"))')}

    async clickInpSearch () {
        await this.inpSearch.click()
    }

    async setValueInpSearchText(text) {
        await this.inpSearchText.setValue(text)
    }

    async getTextSearched() {
        return await this.resultSearch.getText()
    }

    //elements

    get btnMore() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_more")')}
    get btnEnterOrJoin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/main_drawer_account_container")')}

    //interactions

    async clickBtnMore() {
        await this.btnMore.click()
    }

    async clickBtnEnterOrJoin() {
        await this.btnEnterOrJoin.click()
    }

}
export default class HomeElementsScreen {
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")') }
    get inpSearchText() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')}
    get resultSearch() {return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list").childSelector(new UiSelector().className("android.view.ViewGroup").instance(0)).childSelector(new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title"))')}

    get btnMore() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_more")')}
    get btnEnterOrJoin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/main_drawer_account_container")')}
}

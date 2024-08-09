import { expect } from '@wdio/globals'

describe('Wikipedia', () => {
    it('Abrindo o aplicativo do wikipedia', async () => {

        //elements
        const btnSkip = $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/fragment_onboarding_skip_button")')
        const inpSearch = $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")')
        const inpSearchText = $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')
        const resultSearch = $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list").childSelector(new UiSelector().className("android.view.ViewGroup").instance(0)).childSelector(new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title"))')
        
        
        //interactions & actions
        await btnSkip.click()
        await inpSearch.click()
        await inpSearchText.setValue('Vasco da Gama')

        expect(await resultSearch.getText()).toBe('Vasco da Gama')
    })
})

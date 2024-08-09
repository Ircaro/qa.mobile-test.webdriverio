export default class OnboardingScreen {
    get btnSkip() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/fragment_onboarding_skip_button")')}

    async clickBtnSkip () {
        await this.btnSkip.click()
    }
}
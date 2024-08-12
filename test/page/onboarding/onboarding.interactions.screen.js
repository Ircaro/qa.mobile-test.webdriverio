import OnboardingElementsScreen from "./onboarding.elements.screen";

export default class OnboardingInteractionsScreen extends OnboardingElementsScreen{
    async clickBtnSkip () {
        await super.btnSkip.click()
    }
}

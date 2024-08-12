import OnboardingElementsScreen from "./onboarding.elements.screen.js";

export default class OnboardingInteractionsScreen extends OnboardingElementsScreen{
    async clickBtnSkip () {
        await super.btnSkip.click()
    }
}

import OnboardingInteractionsScreen from '../page/onboarding/onboarding.interactions.screen.js'
import HomeActionsScreen from '../page/home/home.actions.screen.js'

const onboarding = new OnboardingInteractionsScreen()
const homeScreen = new HomeActionsScreen()

describe('Wikipedia', () => {
    it('Abrindo o aplicativo do wikipedia', async () => {
    
        await onboarding.clickBtnSkip()
        await homeScreen.searchText('Vasco da Gama')

        // expect(await homeScreen.getTextSearched()).toBe('Vasco da Gama')
    })
})

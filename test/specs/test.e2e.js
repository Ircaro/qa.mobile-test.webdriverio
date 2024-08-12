import HomeActionsScreen from '../page/home/home.actions.screen.js'
import HomeQuestionsScreen from '../page/home/home.questions.screen.js'
import OnboardingActionsScreen from '../page/onboarding/onboarding.actions.screen.js'

const onboardingActions = new OnboardingActionsScreen()
const homeActions = new HomeActionsScreen()
const homeQuestions = new HomeQuestionsScreen()

describe('Wikipedia', () => {
    it('Abrindo o aplicativo do wikipedia', async () => {
    
        await onboardingActions.clickBtnSkip()
        await homeActions.searchText('Vasco da Gama')
        await homeQuestions.isTheTextSame('Vasco da Gama')

    })
})

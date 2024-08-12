import CreateAccountActionsScreen from '../page/home/createAccount/createAccount.Actions.screen.js'
import LoginActionsScreen from '../page/home/createAccount/login/login.actions.screen.js'
import LoginQuestionsScreen from '../page/home/createAccount/login/login.questions.screen.js'
import HomeActionsScreen from '../page/home/home.actions.screen.js'
import OnboardingInteractionsScreen from '../page/onboarding/onboarding.interactions.screen.js'

const onboardingActions = new OnboardingInteractionsScreen()
const homeActions = new HomeActionsScreen()
const createAccountActions = new CreateAccountActionsScreen()
const loginActions = new LoginActionsScreen()
const loginQuestions = new LoginQuestionsScreen()

const invalidUser = "Teste.doido"
const invalidPassword = "Senha!doida"

const errorText = "O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor."

describe ('Wikipedia', () => {
    it('Validando login com credenciais inválidas', async () => {
        await onboardingActions.clickBtnSkip()
        await homeActions.enterCreateAccountScreen()
        await createAccountActions.clickBtnEnter()
        await loginActions.loginWithInvalidCredentials(invalidUser, invalidPassword)
        await loginQuestions.isTheErrorTextTheSame(errorText)
    })
})

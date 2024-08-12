import CreateAccountScreen from '../page/home/createAccount/createAccount.elements.screen.js/index.js'
import Login from '../page/home/createAccount/login/login.screen.js'
import HomeScreen from '../page/home/home.screen.js'
import OnboardingScreen from '../page/onboarding/onboarding.elements.screen.js/index.js'

const onboarding = new OnboardingScreen()
const home = new HomeScreen()
const createAccount = new CreateAccountScreen()
const login = new Login()

const invalidUser = "Teste.doido"
const invalidPassword = "Senha!doida"

const expectResult = "O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor."

describe ('Wikipedia', () => {
    it('Validando login com credenciais inválidas', async () => {
        await onboarding.clickBtnSkip()
        await home.clickBtnMore()
        await home.clickBtnEnterOrJoin()
        await createAccount.clickBtnEnter()
        await login.loginWithInvalidCredentials(invalidUser, invalidPassword)

        expect(await login.getTextError()).toBe(expectResult)
    })
})
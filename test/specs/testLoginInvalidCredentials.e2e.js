import CreateAccountScreen from '../pageobjects/home/createAccount/createAccount.screen.js'
import Login from '../pageobjects/home/createAccount/login/login.screen.js'
import HomeScreen from '../pageobjects/home/home.screen.js'
import OnboardingScreen from '../pageobjects/onboarding/onboarding.screen.js'

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
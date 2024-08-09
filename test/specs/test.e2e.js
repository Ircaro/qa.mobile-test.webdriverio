import { expect } from '@wdio/globals'
import OnboardingScreen from '../pageobjects/onboarding/onboarding.screen.js'
import HomeScreen from '../pageobjects/home/home.screen.js'

describe('Wikipedia', () => {
    it('Abrindo o aplicativo do wikipedia', async () => {

        const onboarding = new OnboardingScreen()
        const homeScreen = new HomeScreen()
    
        await onboarding.clickBtnSkip()
        await homeScreen.clickInpSearch()
        await homeScreen.setValueInpSearchText('Vasco da Gama')

        expect(await homeScreen.getTextSearched()).toBe('Vasco da Gama')
    })
})

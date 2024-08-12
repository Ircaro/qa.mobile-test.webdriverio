export default class LoginElementsScreen {

    get inpUser() { return $('android=new UiSelector().text("Nome de usuário")') }
    get inpPassword() { return $('android=new UiSelector().text("Senha")')}
    get btnEnter() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")')}
    get popUpError() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")')}



}
import navMobile from "./modules/components/nav-mobile.js"
import modalSubmitRequest from "./modules/modal-submit-request.js"
import formSubmitRequest from "./modules/form-submit-request.js"
import dialogSignIn from "./modules/dialog-sign-in.js"
import formSignIn from "./modules/form-sign-in.js"
import formSearchEngine from "./modules/form-search-engine.js"
import cards from "./modules/cards.js"
import dateYear from "./modules/utils/year.js"

navMobile()

modalSubmitRequest()
formSubmitRequest()

dialogSignIn()
formSignIn()

formSearchEngine()

cards()

dateYear()

import { ValidationClass } from '../HelperClasses/ValidationClass.js';
import { ModalDialog } from '../HelperClasses/ModalDialog.js';
import { LoadingClass } from '../HelperClasses/LoadingClasses.js';

let inputEmailID = 'inputEmail4';
let formSubmitButtonID = 'submitBtn';
let inputtitleID = 'inputtitle';
let textBoxID = 'textBox';

let errorModal = new ModalDialog('errorModal');
let timeoutModal = new ModalDialog('timeout');
let loadingElement = new LoadingClass('loading', 'form')
let submitBtn = document.getElementById(formSubmitButtonID);

/*let emailInput = new ValidationClass(inputEmailID, formSubmitButtonID);
let titleInput = new ValidationClass(inputtitleID, formSubmitButtonID);
let textBoxIDInput = new ValidationClass(textBoxID, formSubmitButtonID);*/

/*emailInput.EmailValidationListener().MustContain("@gmail.com");
titleInput.RequiredDefault().SetMaxNumber(25);

textBoxIDInput.Required("New Message").SetMaxCharactersAllowed(2);*/

errorModal.CreateErrorModal('modalSection', 'Error', 'Test Error');
timeoutModal.CreateErrorModal('modalSection', 'Error', 'Timeout Error')





submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loadingElement.showGeneralLoading();
    setTimeout(() => {
        loadingElement.removeAllLoading();
        errorModal.changeTitle('Connection Error')
                                .changeBodyMessage('Looks like you aren\'t connected to the internet')
                                .showModal()
                                .hideModal();
        timeoutModal.showModal();
        
    }, 5000)
})
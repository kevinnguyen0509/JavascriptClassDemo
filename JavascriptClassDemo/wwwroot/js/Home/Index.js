import { ValidationClass } from '../HelperClasses/ValidationClass.js';



let emailTxtID = 'emailTxt';
let FormSubmitButtonID = 'FormSubmitButton';
let emailTwoTxtID = 'emailTwoTxt';
let passwordTxtID = 'passwordTxt';
let numberTxtID = 'numberTxt';
let exampleCheck1Id = 'exampleCheck1';
let textBoxID = 'textBox';

const emailOne = new ValidationClass(emailTxtID, FormSubmitButtonID);
const emailTwo = new ValidationClass(emailTwoTxtID, FormSubmitButtonID);
const passwordTxt = new ValidationClass(passwordTxtID, FormSubmitButtonID);
const numberTxt = new ValidationClass(numberTxtID, FormSubmitButtonID);
const textBox = new ValidationClass(textBoxID, FormSubmitButtonID);

//Setting form validation
emailOne.EmailValidationListener().SetMaxCharactersAllowed(10).Required("*Yes, we do need an email*").MustContain(".com");
emailTwo.EmailValidationListener().SetMaxCharactersAllowed(10).RequiredDefault();
passwordTxt.SetMaxCharactersAllowed(5);

numberTxt.SetMinimumNumber(2).SetMaxNumber(5)
textBox.MustContain("Hello");




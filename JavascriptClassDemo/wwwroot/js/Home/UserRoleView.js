import { UserRoleClass } from '../Modals/UserRole.js'
import { ValidationClass } from '../HelperClasses/ValidationClass.js'
import { LoadingClass } from '../HelperClasses/LoadingClasses.js'
import { ModalDialog } from '../HelperClasses/ModalDialog.js'

let UserForm = document.getElementById('roleForm');
let formContainerID = 'userRoleTable';
let nameTxtID = 'nameTxt';
let roleTxtID = 'roleTxt';

let userSubmitBtnID = 'userSubmitBtn';

const UserRole = new UserRoleClass();
const nameInputBox = new ValidationClass(nameTxtID, userSubmitBtnID);
const roleTxtInputBox = new ValidationClass(roleTxtID, userSubmitBtnID);
nameInputBox.Required("You Need A Name").SetMaxCharactersAllowed(10);
roleTxtInputBox.RequiredDefault().SetMaxCharactersAllowed(10);


UserForm.addEventListener('submit', function (e) {
    e.preventDefault();
    UserRole.AddNewUser(UserForm, formContainerID);
    

});



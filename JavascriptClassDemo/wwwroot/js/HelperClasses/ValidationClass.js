
export class ValidationClass {
    constructor(elementID, formSubmitButton) {//I want to make sure the element being grabbed always has an ID
        this.elementID = elementID;
        this.formSubmitButton = formSubmitButton;     
    }
    /**
     * Attaches a Listener for email validation
     * @param {any} emailInputElement - Takes an Email input element
     */
    EmailValidationListener() {
        let inputElement = document.getElementById(this.elementID);
        let submitButton = document.getElementById(this.formSubmitButton);

        let elementID = this.elementID;
        let atSymbolLblElement;

        inputElement.addEventListener('change', function () {
            if (inputElement.value.includes('@')) {
                if (atSymbolLblElement) {
                    atSymbolLblElement.remove();
                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }                
                }             
            }
            else {
                let atSymbolExist = document.getElementById(`noAtSymbolLbl${elementID}`);
                submitButton.disabled = true;
                if (!atSymbolExist) {

                    let noAtSymbolErrorMessage = `<span id="noAtSymbolLbl${elementID}" class="ValidationErrorMessage" style="color: red; display: block;">This email is missing Symbols: '@'</span>`
                    inputElement.insertAdjacentHTML('afterend', noAtSymbolErrorMessage);
                    atSymbolLblElement = document.getElementById(`noAtSymbolLbl${elementID}`);
                }
            }
        });
        return this;
    }

    /**
     * This is used to set the max characters allowed for text input field
     * @param {bigint} maxCharacters - Takes in an int to set max characters
     */
    SetMaxCharactersAllowed(maxCharacters) {
        let inputElement = document.getElementById(this.elementID);
        let elementID = this.elementID;
        let maxCharacterElement;
        let submitButton = document.getElementById(this.formSubmitButton);

        inputElement.addEventListener('keyup', function () {
            if (inputElement.value.length > maxCharacters) {
  
                let maxCharacterLblExist = document.getElementById(`maxCharacter${elementID}`);
                if (!maxCharacterLblExist) {
                    let maxCharacterErrorMessage = `<span id="maxCharacter${elementID}" class="ValidationErrorMessage" style="color: red; display: block;">Only ${maxCharacters} characters allowed.</span>`
                    inputElement.insertAdjacentHTML('afterend', maxCharacterErrorMessage);
                    maxCharacterElement = document.getElementById(`maxCharacter${elementID}`);
                    submitButton.disabled = true;
                }
            }
            else if (inputElement.value.length <= maxCharacters) {
                console.log('less')

                if (maxCharacterElement) {
                    maxCharacterElement.remove();
                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }
                }
            }
  
        });

        return this;
    }

    /**
     * This makes the input field required and sets a custom message
     * @param {string} requiredMessage
     */
    Required(requiredMessage) {
        let inputElement = document.getElementById(this.elementID);
        let requiredString = `<span id="required${this.elementID}" style="color: #cc6600; ">${requiredMessage}</span>`;
        inputElement.insertAdjacentHTML('beforebegin', requiredString);
        inputElement.setAttribute('Required', '');
        return this;
    }
    /**
     * This set the field as required and gives a default required message
     * */
    RequiredDefault() {
        let inputElement = document.getElementById(this.elementID);
        let requiredString = `<span id="required${this.elementID}" style="color: #cc6600; ">*Required*</span>`;
        inputElement.insertAdjacentHTML('beforebegin', requiredString);
        inputElement.setAttribute('Required', '');
        return this;
    }
    //Number Range
    SetNumberRange(minNum, maxNum) {
        let elementID = this.elementID;
        let submitButton = document.getElementById(this.formSubmitButton);
        let inputElement = document.getElementById(this.elementID);
        let minMaxString = `<span id="minMaxLbl${this.elementID}" style="color: red; display:block;">Number Must be between ${minNum} - ${maxNum}</span>`;
        let inputValue;
        let warningLbl;
        inputElement.addEventListener('blur', function () {
            inputValue = inputElement.value;

            if (inputValue * 1 < minNum || inputValue > maxNum) {//Number is outside range, attach warning label
                if (!warningLbl) {
                    inputElement.insertAdjacentHTML('afterend', minMaxString);
                    warningLbl = document.getElementById(`minMaxLbl${elementID}`)
                    submitButton.disabled = true;
                }

            }
            else {
                if (warningLbl) {
                    warningLbl.remove();
                    warningLbl = null;

                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }
                }
            }


        });
        return this;
    }


    SetMinimumNumber(minNum) {
        let elementID = this.elementID;
        let submitButton = document.getElementById(this.formSubmitButton);
        let inputElement = document.getElementById(this.elementID);
        let minMaxString = `<span id="minNumberLbl${this.elementID}" style="color: red; display:block;">Number Must be over ${minNum}</span>`;
        let inputValue;
        let warningLbl;
        inputElement.addEventListener('blur', function () {
            inputValue = inputElement.value;

            if (inputValue * 1 < minNum) {
                if (!warningLbl) {
                    inputElement.insertAdjacentHTML('afterend', minMaxString);
                    warningLbl = document.getElementById(`minNumberLbl${elementID}`)
                    submitButton.disabled = true;
                }

            }
            else {
                if (warningLbl) {
                    warningLbl.remove();
                    warningLbl = null;

                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }
                }
            }


        });
        return this;
    }

    /**
     * Sets the max int allowed
     * @param {any} MaxNum
     */
    SetMaxNumber(MaxNum) {
        let elementID = this.elementID;
        let submitButton = document.getElementById(this.formSubmitButton);
        let inputElement = document.getElementById(this.elementID);
        let minMaxString = `<span id="maxNumberLbl${this.elementID}" style="color: red; display:block;">Number Must be under ${MaxNum}</span>`;
        let inputValue;
        let warningLbl;
        inputElement.addEventListener('blur', function () {
            inputValue = inputElement.value;

            if (inputValue * 1 > MaxNum) {
                if (!warningLbl) {
                    inputElement.insertAdjacentHTML('afterend', minMaxString);
                    warningLbl = document.getElementById(`maxNumberLbl${elementID}`)
                    submitButton.disabled = true;
                }

            }
            else {
                if (warningLbl) {
                    warningLbl.remove();
                    warningLbl = null;

                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }
                }
            }


        });
        return this;
    }
    //Must Contain string
    MustContain(searchString) {
        let elementID = this.elementID;
        let inputElement = document.getElementById(this.elementID);
        let warningLblString = `<span id="mustContainLbl${elementID}" style="color: red; display:block;">Must contain '${searchString}'</span>`;
        let warningLblElement;
        let submitButton = document.getElementById(this.formSubmitButton);

        inputElement.addEventListener('change', function () {
            let inputValue = inputElement.value;
            if ((inputValue.toUpperCase().includes(searchString.toUpperCase()))) {
                if (warningLblElement) {
                    warningLblElement.remove();
                    warningLblElement = null;

                    let ValidationErrorMessage = document.querySelectorAll('.ValidationErrorMessage');
                    if (ValidationErrorMessage.length == 0) {
                        submitButton.disabled = false;
                    }

                }
            }
            else {
                if (!warningLblElement) {
                    inputElement.insertAdjacentHTML('afterend', warningLblString);
                    warningLblElement = document.getElementById(`mustContainLbl${elementID}`)
                    submitButton.disabled = true;
                }
                
            }
        });
        return this;
    }

}

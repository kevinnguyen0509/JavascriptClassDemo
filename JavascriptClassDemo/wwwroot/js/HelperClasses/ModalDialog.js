
export class ModalDialog {
    constructor(id) {
        this.id = id;

    }

    CreateErrorModal(ElementToAttachToID, title, message) {
        let elementID = this.id;
        let elementToAttachTo = document.getElementById(ElementToAttachToID);
        elementToAttachTo.insertAdjacentHTML('afterbegin', ErrorModalElement(elementID, title, message));
    }

    changeTitle(title) {
        let id = this.id;
        let titleElement = document.getElementById(`${id}TitleModal`)
        $(titleElement).text('');
        $(titleElement).text(title);
        return this;
    }

    changeBodyMessage(message) {
        let id = this.id;
        let bodyElement = document.getElementById(`${id}ErrorModalBody`)
        $(bodyElement).text('');
        $(bodyElement).text(message);
        return this;
    }

    showModal() {
        let elementId = this.id;
        $(`#${elementId}`).modal('show');
        return this;
    }
    hideModal() {
        let elementId = this.id;
        $(`#${elementId}`).modal('hide');
        return this;
    }
}


function ErrorModalElement(ElementId, title, message) {
    return `
    <div class="modal" tabindex="-1" role="dialog" id="${ElementId}">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modalTitle" id="${ElementId}TitleModal" style="color: red;">${title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="${ElementId}ErrorModalBody">
                    ${message}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
`
}


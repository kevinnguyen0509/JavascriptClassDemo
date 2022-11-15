
export class LoadingClass {
    constructor(id, elementIDToAttachToID) {
        this.id = id;
        this.elementIDToAttachToID = elementIDToAttachToID;
    }
    showGeneralLoading() {
        let id = this.id;
        let elementToAttachTo = document.getElementById(this.elementIDToAttachToID);
        elementToAttachTo.insertAdjacentHTML('afterbegin', GeneralOverlayElement(id));
        elementToAttachTo.insertAdjacentHTML('afterbegin', GeneralLoadingElement(id));
        let appendToElement = document.getElementById(this.elementIDToAttachToID);
        appendToElement.style.position = 'relative';


    }

    removeAllLoading() {
        let loadingGif = document.getElementById(`${this.id}LoadingGif`)
        let overlay = document.getElementById(`${this.id}overlay`)

        loadingGif.remove();
        overlay.remove();
    }



}

function GeneralOverlayElement(id) {
    return `
            <div id="${id}overlay"
                 style="position: absolute; width: 100%; height: 100%; background: black;
                  z-index: 998; opacity: 0.5;"></div>
`
}

function GeneralLoadingElement(id) {
    return `
            <img id="${id}LoadingGif" style="position: absolute; z-index: 999; margin-left: auto;
                margin-right: auto; left: 0; right: 0; text-align: center;
                height: 100%;" src="/img/loading1.gif" />
`
}
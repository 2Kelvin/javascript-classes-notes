class ListClass {
    constructor(element) {
        this.listElement = element;
        this.arrTextList = [];
    }

    //creating a HTML <li> element for the text that passed to it
    static createListItem(aTextItem) {
        const li = document.createElement("li");
        li.textContent = aTextItem;
        return li;
    }

    // will update the DOM with the items contained in the 'arrTextList'
    // each item in the array will be updated in a corresponding list item
    updateList() {
        // removing all existing <li> elements
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }
        // adding <li> items 
        for (let textItem of this.arrTextList) {
            this.listElement.appendChild(ListClass.createListItem(textItem));
        }
    }

    addToList(text) {
        this.arrTextList.push(text);
        this.updateList();
    }

    removeListItem(arrIndex) {
        this.arrTextList.splice(arrIndex, 1);
        this.updateList();
    }
}
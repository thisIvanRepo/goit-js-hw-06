class Storage {
    #items;
    constructor(newItems) {
        this.#items = [...newItems];
    }

    getItems() {
        return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(rmItem) {
        const index = this.#items.indexOf(rmItem);
        if (index > -1) {
            this.#items.splice(index, 1);
        }
    }
}

//Example
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//--separator of tasks
console.log('--- next task ---');

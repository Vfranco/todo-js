

export class Todo {

    db;

    constructor(persistencia) {
        this.db = persistencia;
    }

    create(key, value) {
        return this.db.setItem(key, value);
    }

    read() {

    }

    update() {

    }

    delete() {

    }
}
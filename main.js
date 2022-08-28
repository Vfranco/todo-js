import { App } from "./src/app/app";
import { Persistencia } from "./src/core/Persistencia";
import { Events } from "./src/core/Events";
import { Todo } from "./src/core/Todo";

((app, events) => {
    events.click('#btn', () => {
        console.log(app.todo.create('algo', { hola : 'mundo'}));
    })

    console.log(events);
})(new App(new Todo(new Persistencia)), new Events)
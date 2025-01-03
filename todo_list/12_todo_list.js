const todolist = [{
    name: 'Sem Exams', 
    duedate: '06-01-2025'
    }, {
    name: '6th Sem',
    duedate: '05-02-2025'
}];

rendertodolist();

document.querySelector('.js-add-todo-btn')
    .addEventListener('click', () => {
        addtodo();
    });

function rendertodolist() {
    let todolistHTML = '';

    todolist.forEach(function(todoObject, index) {
        const {name, duedate} = todoObject;

        const html = `
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                todolist.splice(${index}, 1);
                rendertodolist();
            " class="delete-todo-btn">Delete</button>
        `;
        todolistHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addtodo() {
    const inputelement = document.querySelector('.js-name-input');
    const name = inputelement.value;

    const dateinputelement = document.querySelector('.js-due-date-input');
    const duedate = dateinputelement.value;

    if (name && duedate) { 
        todolist.push({
            name,
            duedate
        });

        inputelement.value = '';
        dateinputelement.value = '';

        rendertodolist();
    } else {
        alert('Please fill in both fields.');
    }
}

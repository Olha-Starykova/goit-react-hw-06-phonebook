import types from './contacts-types'
import shortid from 'shortid';

const addTodo = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: name,
        number: number,
    }
});


const deleteTodo = contactId => ({
    type: types.DELETE,
    payload: contactId
})

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value
})

export default {addTodo, deleteTodo, changeFilter}
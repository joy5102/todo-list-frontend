import axios from 'axios'

const baseUrl = "https://todo-list-backend-ogx3.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            setToDo(data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    if (text !== "") {
        axios
            .post(`${baseUrl}/update`, { _id: toDoId, text })
            .then((data) => {
                setText("")
                setIsUpdating(false)
                getAllToDo(setToDo)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        setIsUpdating(false)
        getAllToDo(setToDo)
    }
}

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => {
            console.log(err)
        })
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }
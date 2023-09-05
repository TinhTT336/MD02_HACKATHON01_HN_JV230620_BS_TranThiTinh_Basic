import React, { useRef, useState } from 'react'

export default function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(() => {
        const list = JSON.parse(localStorage.getItem("todos")) || [];
        return list;
    });
    const inputRef = useRef();
    const [idEdit, setIdEdit] = useState(null);
    // ham them submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "") {
            const newTodo = {
                id: Date.now(),
                title: input,
                status: false,
            }
            const newList = [...todos, newTodo];
            setTodos(newList);
            localStorage.setItem("todos", JSON.stringify(newList));
            setInput("");
            inputRef.current.focus();
        }
        if (idEdit !== -1) {
            const newList = todos.map(t => t.id === idEdit ? (t = { ...t, title: input }) : (t = { ...t }));
            setTodos(newList);
            localStorage.setItem("todos", JSON.stringify(newList));
            inputRef.current.focus();
        }
    }
    // ham xoa
    const handleDelete = (id) => {
        const newList = todos.filter(t => t.id !== id);
        setTodos(newList);
        localStorage.setItem("todos", JSON.stringify(newList));
        inputRef.current.focus();
    }
    // ham sua
    const handleEdit = (id) => {
        const todoEdit = todos.find(t => t.id === id);
        setInput(todoEdit.title);
        setIdEdit(id);
        inputRef.current.focus();
    }
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div
                        className="row d-flex justify-content-center align-items-center
              h-100"
                    >
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h3 style={{ marginBottom: 10 }}>
                                        TODO LIST
                                    </h3>
                                    <p>Get things done, one item at a time.</p>
                                    <hr></hr>
                                    {/* Tabs content */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-group mb-0">
                                                {todos.map(t => (
                                                    <li key={t.id}
                                                        className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                                                        style={{ backgroundColor: "#f4f6f7" }}
                                                    >
                                                        <span>{t.title}</span>
                                                        <div>
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox" checked={t.status === true}
                                                            />
                                                            <a className="text-info" title="Sửa công việc" onClick={() => handleEdit(t.id)}>
                                                                <i
                                                                    className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                                                />
                                                            </a>
                                                            <a onClick={() => handleDelete(t.id)}
                                                                className="text-danger"
                                                                title="Xóa công việc"
                                                            >
                                                                <i
                                                                    className="fas
                                                      fa-trash-alt"
                                                                />
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tab-content">
                                                <p>Add to the todo list</p>
                                                <form onSubmit={handleSubmit}
                                                    className="d-flex justify-content-center
                              align-items-center mb-4"
                                                >
                                                    <div className="form-outline flex-fill">
                                                        <input type="text" id="form2" className="form-control" style={{ border: "1px solid #afafaf" }} value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />
                                                        {/* <label className="form-label" htmlFor="form2">
                                                            ADD ITEM
                                                        </label> */}
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-info
                                  ms-2"
                                                    >
                                                        ADD ITEM
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Tabs content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

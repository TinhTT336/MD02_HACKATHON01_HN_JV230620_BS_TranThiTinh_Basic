import React from 'react'

export default function TodoList() {
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
                                                <li
                                                    className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                                                    style={{ backgroundColor: "#f4f6f7" }}
                                                >
                                                    <div>
                                                        <input
                                                            className="form-check-input
                                                  me-2"
                                                            type="checkbox"
                                                            defaultChecked=""
                                                        />
                                                        <s>Cras justo odio</s>
                                                    </div>
                                                    <div>
                                                        <a href="#!" className="text-info" title="Sửa công việc">
                                                            <i
                                                                className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                                            />
                                                        </a>
                                                        <a
                                                            href="#!"
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
                                                <li
                                                    className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          justify-content-between"
                                                    style={{ backgroundColor: "#f4f6f7" }}
                                                >
                                                    <div>
                                                        <input className="form-check-input" type="checkbox" />
                                                        Cras justo odio
                                                    </div>
                                                    <div>
                                                        <a href="#!" className="text-info" title="Sửa công việc">
                                                            <i
                                                                className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                                            />
                                                        </a>
                                                        <a
                                                            href="#!"
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
                                            </ul>
                                            <div className="tab-content">
                                                <h5>Add to the todo list</h5>
                                                <form
                                                    className="d-flex justify-content-center
                              align-items-center mb-4"
                                                >
                                                    <div className="form-outline flex-fill">
                                                        <input type="text" id="form2" className="form-control" />
                                                        <label className="form-label" htmlFor="form2">
                                                            ADD ITEM
                                                        </label>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-info
                                  ms-2"
                                                    >
                                                        Thêm
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

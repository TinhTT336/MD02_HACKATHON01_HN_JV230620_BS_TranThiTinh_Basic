import React from 'react'

export default function Header() {
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
                                    <p>Get things done, one item at a time</p>
                                    <hr></hr>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

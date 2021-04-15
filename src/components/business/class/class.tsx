export const Class = () => {
    return <div className="accordion accordion-custom">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                    Yoga
                </button>
                <div className="dropdown float-end">
                    <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item" href="#">Move up</a></li>
                        <li><a className="dropdown-item" href="#">Move down</a></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div className="accordion-body">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-lg-4 col-md-5">
                                <img className="img-fluid" src="/assets/img/yoga-img.jpg" alt="Yoga image" />
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="card-body">
                                    <div className="dot"></div>
                                    <h5 className="card-title">Advanced Yoga
                                  <div className="dropdown float-end">
                                            <button className="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                <li><a className="dropdown-item" href="#">Move up</a></li>
                                                <li><a className="dropdown-item" href="#">Move down</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </h5>
                                    <p className="card-text"><small className="text-muted">Starts on 15 Feb at 3:00 pm. 2 other timings</small></p>
                                    <p className="card-text">Yoga class designed to improve your practice by maintaining longer postures. Suitable for people who have completed beginners course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
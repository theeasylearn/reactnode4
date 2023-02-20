import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div>
    <nav className="navbar navbar-expand-xl navbar-dark bg-danger fixed-top">
    <div className="container-fluid">
        <a id="home" className="navbar-brand" href="#">The easylearn Academy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarBasic">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#aboutus">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#contactus">Contacts us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel">
    <ol className="carousel-indicators">
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={0} className="active" />
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={1} />
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={2} />
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://picsum.photos/1200/300?random=1" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/1200/300?random=2" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/1200/300?random=3" className="d-block w-100" alt="Slide 3" />
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
    </a>
    </div>
    <div className="container mt-5">
    <div className="row mb-3">
        <div className="col-12 mb-3">
        <h2 id="aboutus" className="border-bottom">About us</h2>
        </div>
        <div className="col-5">
        <img src="https://picsum.photos/400" className="img-fluid img-thumbnail shadow" />
        </div>
        <div className="col-7">
        <h3>Who we are?</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor dolore expedita dolorem doloremque beatae rerum aspernatur alias necessitatibus laboriosam labore, sint dignissimos illo nemo fugit dolorum incidunt! Quidem voluptates eveniet, eos fugiat quo cum? Ipsa sit molestias quibusdam libero. Nulla illum eum est vitae vero ipsum non suscipit placeat quisquam aperiam, optio voluptates, officia qui unde minus ut aspernatur dignissimos alias! Est deleniti sint necessitatibus reiciendis quibusdam, nobis culpa alias fugit dolor iusto vel quo aut hic voluptatum tenetur  <br />  aspernatur nam cupiditate. Accusamus dolores at saepe illo vel! Sapiente aspernatur dolores voluptates culpa quo nihil quaerat veniam in qui odio esse similique, vitae impedit, tempora maxime magnam possimus, voluptas id alias ipsam velit. Velit possimus nobis suscipit sit eius earum odio dignissimos maxime ea obcaecati. Eum illo aspernatur adipisci blanditiis doloribus. Architecto expedita, voluptatem in tempore placeat iusto? Illo non aperiam ab aliquam doloremque reiciendis dolorem itaque quasi tempora fuga. Minima fugit, adipisci accusamus minus inventore voluptatum quam dolorum. Vel magnam ratione rem obcaecati autem, numquam, facere consequatur labore, odio doloremque optio consequuntur repudiandae dolorum soluta reprehenderit nobis eligendi reiciendis nulla sunt ipsam asperiores. Natus reprehenderit obcaecati, quia excepturi laboriosam debitis aspernatur, dolores praesentium dolorum repudiandae sapiente harum quidem?</p>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-12 mb-3">
        <h2 id="courses" className="border-bottom">Courses</h2>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card shadow">
            <img src="https://picsum.photos/200" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
            <h4 className="border-bottom">React JS</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" className="btn btn-danger">Read More...</a>
            </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card shadow">
            <img src="https://picsum.photos/200" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
            <h4 className="border-bottom">Flutter</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" className="btn btn-danger">Read More...</a>
            </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card shadow">
            <img src="https://picsum.photos/200" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
            <h4 className="border-bottom">PHP &amp; Laravel</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" className="btn btn-danger">Read More...</a>
            </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card shadow">
            <img src="https://picsum.photos/200" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
            <h4 className="border-bottom">Python</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" className="btn btn-danger">Read More...</a>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container-fluid mb-5 bg-light p-5">
    <div className="row">
        <div className="col-10 offset-1">
        <div className="row">
            <div className="col-12 mb-3">
            <h2 id="products" className="border-bottom">Products</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card shadow">
                <div className="row g-0">
                <div className="col-5 col-sm-4">
                    <img src="https://picsum.photos/200" className="img-fluid w-100" alt="card-horizontal-image" />
                </div>
                <div className="col-7 col-sm-8">
                    <div className="card-body">
                    <h4 className="card-title">School management software</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-danger">Read More...</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card shadow">
                <div className="row g-0">
                <div className="col-7 col-sm-8">
                    <div className="card-body">
                    <h4 className="card-title">Car software</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-danger">Read More...</a>
                    </div>
                </div>
                <div className="col-5 col-sm-4">
                    <img src="https://picsum.photos/200" className="img-fluid w-100" alt="card-horizontal-image" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container mb-3">
    <div className="row">
        <div className="col-12 mb-3">
        <h2 id="contactus" className="border-bottom">Contact us</h2>
        </div>
        <div className="col-12">
        <div className="card shadow">
            <div className="card-body">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="mobile" placeholder="Password" />
                <label htmlFor="mobile">Mobile</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="subject" placeholder="subject" />
                <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Message" id="message" style={{"height":"100px"}} defaultValue={""} />
                <label htmlFor="message">Message</label>
            </div>
            <div>
                <button className="btn btn-danger">submit form</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container-fluid p-5 bg-dark">
    <div className="row">
        <div className="col-8 text-center text-white offset-2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quos facere, pariatur nam ducimus veniam delectus tempora veritatis voluptatum accusantium blanditiis magni culpa neque, odit tempore provident autem aspernatur hic!</p>
        </div>
    </div>
    </div>
</div>
)
root.render(output);

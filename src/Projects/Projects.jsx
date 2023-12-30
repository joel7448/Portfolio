import React from 'react'
import shopping from '../assets/shopping.png'
function Projects() {
  return (
    <>
    <section class="py-5">
    <div class="container px-5 mb-5">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
        </div>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
              
                <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div class="card-body p-0">
                        <div class="d-flex align-items-center">
                            <div class="p-5 ">
                                <h2 class="fw-bolder">Cranberry Shopping</h2>
                                <p>
                                    Uses React for Frontend / NodeJS for backend / MongoDB for database.
                                    User friendly UI with JWT user authentication and Stripe payments.
                                    Password encryption for security using bcrypt. 
                                   </p>
                            </div>
                            <img class="img-fluid projectImage object-fit-cover" id='project1' src={shopping} alt="..." />
                        </div>
                    </div>
                </div>
              
                <div class="card overflow-hidden shadow rounded-4 border-0">
                    <div class="card-body p-0">
                        <div class="d-flex align-items-center">
                            <div class="p-5">
                                <h2 class="fw-bolder">Valgenesis DRONA</h2>
                                <p>Worked on React Microfrontend Architechture. Writing unit tests and Apis using Nodejs. Implemented custom libraries</p>
                            </div>
                            <img class="img-fluid" src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/4acc4544-e644-47ba-b44d-c2e3fe1d91b0.jpeg?auto=format,compress&size=150" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-5 bg-gradient-primary-to-secondary text-white">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                    </div>
                </div>
            </section>
</>
  )
}

export default Projects
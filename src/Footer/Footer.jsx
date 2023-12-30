import React from 'react'

function Footer() {
  return (
    <section class="bg-light py-5">
    <div class="container px-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
                <div class="text-center my-5">
                    <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                    <p class="lead fw-light mb-4">My name is Joel and I'm a Full Stack Web developer.</p>
                    <p class="text-muted">
                    Highly skilled and results-oriented MERN stack developer with a passion for crafting innovative and efficient web solutions. Proficient in all aspects of the software development life cycle, from concept to deployment. Adept at collaborating with cross-functional teams to drive project success. Strong analytical and problem-solving abilities, coupled with a keen eye for detail. Committed to staying current with emerging technologies to deliver cutting-edge applications.
                    </p>
                    <div class="d-flex justify-content-center fs-2 gap-4">
                        <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                        <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                        <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer
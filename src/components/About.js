import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Unleash Your Creativity, <br />
                <span style={{ color: "hsl(218, 81%, 55%)" }}>
                  Share Your Story
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(200, 71%, 85%)" }}
              >
                Welcome to our blog application, a sanctuary for your thoughts,
                a canvas for your creativity, and a stage for your stories to
                dance. Here, every word is a brushstroke painting a picture,
                every post a melody weaving a tale. Our platform is a haven
                where your voice finds wings to soar, where your ideas find
                roots to grow, and where your stories find hearts to touch. It's
                a place where connections are forged through shared experiences,
                where inspiration flows freely, and where passions are kindled
                and nurtured.
              </p>
            </div>

            <div className="col-lg-5 mb-5 mb-lg-0 position-relative">
              <div class="accordion" id="aboutUsAccordion" >
                {" "}
                <div class="accordion-item">
                  {" "}
                  <h2 class="accordion-header">
                    {" "}
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#whoWeAre"
                      aria-expanded="true"
                      aria-controls="whoWeAre"
                    >
                      {" "}
                      Who We Are{" "}
                    </button>{" "}
                  </h2>{" "}
                  <div
                    id="whoWeAre"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#aboutUsAccordion"
                  >
                    {" "}
                    <div class="accordion-body">
                      {" "}
                      <p>
                        We are a team of passionate bloggers and content
                        creators who are dedicated to sharing our knowledge and
                        experiences with the world. Our mission is to inspire,
                        educate, and entertain our readers through our diverse
                        range of blog posts.
                      </p>{" "}
                      <p>
                        Our team is composed of individuals with various
                        backgrounds and expertise, allowing us to cover a wide
                        array of topics and provide unique perspectives on the
                        subjects we write about.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="accordion-item">
                  {" "}
                  <h2 class="accordion-header">
                    {" "}
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ourValues"
                      aria-expanded="false"
                      aria-controls="ourValues"
                    >
                      {" "}
                      Our Values{" "}
                    </button>{" "}
                  </h2>{" "}
                  <div
                    id="ourValues"
                    class="accordion-collapse collapse"
                    data-bs-parent="#aboutUsAccordion"
                  >
                    {" "}
                    <div class="accordion-body">
                      {" "}
                      <ul>
                        {" "}
                        <li>
                          Integrity: We are committed to honesty, transparency,
                          and ethical practices in all that we do.
                        </li>{" "}
                        <li>
                          Creativity: We strive to think outside the box and
                          bring fresh, innovative ideas to our content.
                        </li>{" "}
                        <li>
                          Passion: We are deeply passionate about our work and
                          are driven to create high-quality, engaging content
                          for our readers.
                        </li>{" "}
                        <li>
                          Community: We believe in fostering a strong,
                          supportive community of readers and fellow bloggers.
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="accordion-item">
                  {" "}
                  <h2 class="accordion-header">
                    {" "}
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ourGoals"
                      aria-expanded="false"
                      aria-controls="ourGoals"
                    >
                      {" "}
                      Our Goals{" "}
                    </button>{" "}
                  </h2>{" "}
                  <div
                    id="ourGoals"
                    class="accordion-collapse collapse"
                    data-bs-parent="#aboutUsAccordion"
                  >
                    {" "}
                    <div class="accordion-body">
                      {" "}
                      <p>Our primary goals are to:</p>{" "}
                      <ul>
                        {" "}
                        <li>
                          Provide valuable, informative, and engaging content to
                          our readers.
                        </li>{" "}
                        <li>
                          Foster a sense of community and connection among our
                          readers and fellow bloggers.
                        </li>{" "}
                        <li>
                          Continuously improve and expand our blog to better
                          serve the needs of our audience.
                        </li>{" "}
                        <li>
                          Inspire and empower our readers to pursue their own
                          passions and goals.
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

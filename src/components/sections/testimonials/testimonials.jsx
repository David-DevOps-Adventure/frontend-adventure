import Heading from "../../heading/heading";
import "./testimonials.css";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CaryPicture from "../../../assets/people/cary.jpeg";
import SarviPicture from "../../../assets/people/sarvi.jpeg";
import TarunPicture from "../../../assets/people/tarun.jpeg";
import RamaPicture from "../../../assets/people/ramalingam.jpeg";
import JeffPicture from "../../../assets/people/jeff.jpeg";
import MikePicture from "../../../assets/people/mike.jpeg";

const testimonials = {
  "Cary Roys": {
    role: "Senior Cloud Solution Architect-Engineer @ Microsoft",
    "recommendation text": [
      "I worked with David on a challenging cloud automation project in Azure, utilizing Python.",
      "David's sharpness and dedication truly impressed me. He successfully ensured the smooth functioning of the project, demonstrating qualities essential to a top-notch DevOps engineer.",
      "I wholeheartedly recommend him.",
    ],
    picture: CaryPicture,
  },
  "Sarvindra Kumar": {
    role: "Senior Manager Cloud Platform @ Gap Inc",
    "recommendation text": [
      "David is always willing to take on new challenges and to find solutions for any problems in our Cloud Platform. He's been able to pick up on new concepts quickly and help others also learn along the way.",
      "He has developed strong skills using Cloud and DevOps engineering tools such Microsoft Azure, Jenkins, Docker, and Kubernetes.",
      "David is also very proficient with programming languages such as JavaScript, Python and Java making him a great addition to any DevOps Team.",
    ],
    picture: SarviPicture,
  },
  "Tarun Pereira": {
    role: "Director of Engineering, Cloud Platform @ Gap Inc",
    recommendation: [
      'Working with David has been a reminder to bring an open mind, curiosity, energy, and most importantly, a smile to every interaction. His customer-obsessed mindset positively teaches and influences those around him to stay focused on the "Why" behind what we do.',
      "He is ever-ready to lend a helping hand and is always willing to share his knowledge with peers. David embraces the unknown and is willing to take himself outside his comfort zone, through this, he is always learning something new.",
      "I truly believe that David has just scratched the surface of a long and successful journey ahead of him. My recommendation and support sit on his side.",
    ],
    picture: TarunPicture,
  },
  "Ramalingam Gopal": {
    role: "Senior Staff Database Engineer @ Gap Inc",
    recommendation: [
      "David is a highly skilled cloud engineer who played a crucial role in our Azure SQL Database deployment project.",
      "With exceptional troubleshooting abilities, he quickly resolved a deployment failure in Jenkins. David's expertise ensured a smooth execution of the Jenkins job, resulting in a successful Azure deployment.",
      "I highly recommend David for any cloud engineering team.",
    ],
    date: "10/19/2021",
    picture: RamaPicture,
  },
  "Jeff Bitton": {
    role: "CEO and Technology Leader @ Pitch59",
    recommendation: [
      "Under David's leadership, a talented team at BYU Idaho students developed automated testing software that had a profound impact on Pitch59's product stability.",
      "We express our gratitude to David for his dedication and exceptional work, which contributed significantly to our early success.",
      "David would be a great addition to any DevOps/Automation team.",
    ],
    picture: JeffPicture,
  },
  "Michael Austin": {
    role: "Lead Cloud Support Engineer @ BD Medical",
    recommendation: [
      "David's expertise in implementing a cutting-edge web apps and databases on Azure revolutionized remote troubleshooting, greatly impacting customer satisfaction.",
      "His strategic focus on leveraging automation has been a game-changer for our team's productivity. ",
      "David is an invaluable asset for any cloud technical support team.",
    ],
    picture: MikePicture,
  },
};

const Testimonials = () => (
  <div>
    <Heading text="Testimonials" />
    <div className="testimonials">
      <Carousel
        interval={10000}
        className="testimonial-box"
        nextIcon={<FaChevronRight className="carousel-icon" />}
        prevIcon={<FaChevronLeft className="carousel-icon" />}
      >
        {Object.entries(testimonials).map(([name, testimonial]) => (
          <Carousel.Item key={name} className="testimony">
            <div className="testimonial-item">
              <div className="testimonial-picture-container">
                <img
                  className="testimonial-picture"
                  src={testimonial.picture}
                  alt={name}
                />
              </div>
              <div className="testimonial-content">
                <h4>{name}</h4>
                <p className="green role">{testimonial.role}</p>
                <div className="testimonial-text text-start bg-light">
                  {testimonial["recommendation text"] ? (
                    <span>{testimonial["recommendation text"].join(" ")}</span>
                  ) : (
                    <span>{testimonial.recommendation.join(" ")}</span>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonials;

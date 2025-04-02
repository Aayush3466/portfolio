import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header port-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div>
          <p className="h3 mb-4">Published Papers</p>
          <div className="mb-3">
                <h5>1. Enhancing DDoS Attack Detection: A Hybrid SVM-Decision Tree Ensemble Approach 
                <span> || </span>
                    <a 
                      href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AMhOZS8AAAAJ&citation_for_view=AMhOZS8AAAAJ:u-x6o8ySG0sC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Link to paper
                    </a>
                </h5>
                <p><strong>Conference:</strong> The 15th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), IIT-Mandi, India</p>
                <p><strong>Abstract:</strong> Developed a hybrid machine learning model combining SVM and Decision Trees to detect DDoS attacks. Achieved very high accuracy on the CICDDoS2019 dataset, enhancing network security.</p>
              </div>

              <div>
                <h5>2. Predicting DDoS Attacks: A Machine Learning Approach using ALDDoS Dataset
                <span> || </span>
                      <a 
                        href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AMhOZS8AAAAJ&citation_for_view=AMhOZS8AAAAJ:u5HHmVD_uO8C" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Link to paper
                      </a>
                </h5>
                <p><strong>Conference:</strong> The 15th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT), IIT-Mandi, India</p>
                <p><strong>Abstract:</strong> Utilized machine learning models like RandomForest and XGBoost to predict DDoS attacks with very high accuracy using the ALDDoS dataset. Enhanced cyber defense by developing a custom web proxy policy.</p>
              </div>

              <p className="h3 mb-4">Submitted Papers || Under Review</p>

                    <div className="mb-3">
                      <h5>
                      1. A Two-Stage Ensemble Feature Selection with Particle Swarm Optimization for Microarray Data Classification in 
                      Distributed Computing Environments 
                        <span> </span> 
                        <span className="text-muted">Under Review || Last update on March 8 2025</span>
                      </h5>
                      <p><strong>Journal:</strong> Alexandria Engineering Journal
                      </p>
                      <p><strong>Authors:</strong> Aayush Adhikari, Sandesh Bhatta, Harendra Singh, Amit Mishra, Khair Ul Nisa, Abu Taha Zamani, Aaron Sapkota  
                            Debendra Muduli, Nikhat Parveen
                            </p>
                      <p><strong>Abstract:</strong> Proposed an ensemble feature selection method leveraging Particle Swarm Optimization for microarray data  
                                  classification. Improved classification performance in distributed computing environments by selecting optimal gene  
                                  subsets.</p>
                            
                    </div>
                    <p className="h3 mb-4">Ongoing Projects</p>
                  <div className="mb-3">
                    <h5>
                      1. Deep Learning-Based Detection and Classification of Nepali Currency 
                      Denominations Using Optimized Convolutional Neural Networks 
                      <span> || </span> 
                      <span className="text-muted">In Progress </span>
                    </h5>
                    <p><strong>Description:</strong> This study presents an automated deep learning-based system for classifying Nepali currency denominations and detecting counterfeits using the MobileNetV2 model. The proposed approach leverages a diverse dataset, data augmentation techniques, and hyperparameter optimization to enhance classification accuracy while maintaining computational efficiency. The system is deployed via a Flask-based web application for real-time recognition, with future improvements focusing on dataset expansion, mobile integration, and blockchain-based security enhancements.</p>
                  </div>

            <p className="h3 mb-4">Other Projects</p>
            <div className="mb-3">
              <h5>
                1. Solving the Hunger Issue || No Hunger Zone 
              </h5>
              <h6>
                Demo of what is it actually about... 
              </h6>
              {/* Embed Vimeo Video */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://player.vimeo.com/video/1065078466"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="No Hunger Zone Project"
                ></iframe>
              </div>
            </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

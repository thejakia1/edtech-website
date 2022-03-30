import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            <div className="section-title">
                <h1 className="mt-4 text-center">Services</h1>
            </div>
            <div className="service-cards px-5">
            <Row xs={1} md={3} className="g-4 py-3">
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-video.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Video Lecture</Card.Title>
                            <Card.Text>
                                Learn anytime you want. We've more than 20k+ video lectures.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-practice.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Easy Practice</Card.Title>
                            <Card.Text>
                                Practice in your suitable time, get your marks immediately.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-live.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Live Class</Card.Title>
                            <Card.Text>
                                Keep your learning process active by doing live class regularly
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-edit.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Lecture Sheet</Card.Title>
                            <Card.Text>
                                Get helping lecture sheet and interactive books promptly.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-result.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Regular Result & Leaderboard</Card.Title>
                            <Card.Text>
                                In this learning competition see your place in the leaderboard among your friends.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="w-25 py-2 mx-auto" variant="top" src="https://10minuteschool.com/assets/icons/home-page/icon-qa.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Ask Question</Card.Title>
                            <Card.Text>
                                In your every question you're getting expert guideline, with our platform.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Services;
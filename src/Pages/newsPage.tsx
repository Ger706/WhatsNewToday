import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const NewsDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const news = location.state?.news;

    if (!news) {
        navigate('/dashboard');
    }

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <Container style={{ paddingTop: "20px" }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg" style={{ borderRadius: "10px" }}>
                        <Card.Img
                            variant="top"
                            src={news.image}
                            alt={news.title}
                            style={{
                                height: "auto",
                                objectFit: "cover",
                                maxHeight: "400px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px"
                            }}
                        />
                        <Card.Body style={{ padding: "20px" }}>
                            <Button
                                variant="secondary"
                                onClick={handleBack}
                                style={{
                                    marginBottom: "20px",
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    borderRadius: "5px"
                                }}
                            >
                                &#8592; Back to Dashboard
                            </Button>

                            <Card.Title as="h2" style={{ fontSize: "28px", fontWeight: "bold" }}>
                                {news.title}
                            </Card.Title>
                            <Card.Subtitle
                                className="mb-2 text-muted"
                                style={{
                                    fontSize: "18px",
                                    marginBottom: "10px",
                                    color: "#6c757d"
                                }}
                            >
                                By: {news.author || "Unknown"} &bull; {new Date(news.publish).toISOString().split('T')[0].replace(/-/g, '/') || " "}
                            </Card.Subtitle>
                            <Card.Text style={{
                                textAlign: "justify",
                                marginBottom: "15px",
                                fontSize: "16px",
                                lineHeight: "1.6"
                            }}>
                                <strong>Description:</strong> {news.description}
                            </Card.Text>
                            <Card.Text style={{
                                textAlign: "justify",
                                marginBottom: "15px",
                                fontSize: "16px",
                                lineHeight: "1.6"
                            }}>
                                {news.content}
                            </Card.Text>
                            <Button
                                href={news.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                style={{
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    width: "100%"
                                }}
                            >
                                Read More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsDetail;

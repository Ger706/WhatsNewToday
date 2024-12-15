import { Row, Container, Col } from 'react-bootstrap';
import '../Styles/footer.css';

function Footer() {
    return (
        <Container className='fluid p-5 mt-4 footer'>
            <Row className='text-white'>
                <Col className=''>
                    <img src="..\src\Images\newsPaper.jpg" className="img-fluid" alt="Newspaper" />
                </Col>
                <Col>
                    <Row>
                        <h5 className='mb-4'>Top News Articles</h5>
                        <Col>
                            <a href=""><p>Breaking: Global News Updates You Should Know</p></a>
                            <a href=""><p>Technology Innovations Shaping the Future</p></a>
                            <a href=""><p>World Politics: What’s Happening Now</p></a>
                        </Col>
                    </Row>
                </Col>
                <Col className='ms-4'>
                    <Row>
                        <h5 className='mb-4'>Latest Newsletters</h5>
                        <a href=""><p>Global News Daily</p></a>
                        <a href=""><p>Tech & Trends</p></a>
                        <a href=""><p>International Affairs</p></a>
                    </Row>
                </Col>
                <Col>
                    <h5 className='mb-4'>Our Mission</h5>
                    <p>We are committed to providing the latest news, covering global events, technology breakthroughs, and more to keep you informed and up-to-date.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

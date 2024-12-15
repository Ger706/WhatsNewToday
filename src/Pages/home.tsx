import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Components/navbar.tsx";
import axios from 'axios';
import NewsCard from "../Components/newsCard.tsx";
import Footer from "../Components/footer.tsx";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const [news, setNews] = useState([]);
    const getNews = async () => {
        try {
            const response = await axios.get(
                "https://newsapi.org/v2/everything?q=apple&from=2024-12-14&to=2024-12-14&sortBy=popularity&apiKey=524359af723241078e404f7f96a6ac4c"
            );
            setNews(response.data.articles);

        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        if (!loginData) {
            navigate("/login");
        } else {
            getNews();
        }
    }, []);

    return (
        <>
            <Navbar />
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center">
                        <h1>WhatNewsToday</h1>
                        <p className="lead mb-4">
                            Stay updated with the latest news and trending stories from around the world. Our platform
                            brings you breaking headlines, insightful articles, and expert opinions on various topics, ranging
                            from technology to health, politics, and beyond. Whether you're looking for something thought-provoking
                            or just a quick update, we have something for everyone.
                        </p>
                        <p className="mb-4">
                            Explore articles that cover the most important events happening across the globe today. Our news
                            section is carefully curated to give you timely, accurate, and relevant updates so that you can stay
                            informed about everything that matters to you. From global trends to local happenings, our coverage
                            ensures you're always in the know.
                        </p>
                        <p>
                            We believe that everyone deserves easy access to reliable information. That's why we aim to provide
                            news that's not only current but also in-depth, with insights that go beyond the headlines. Whether
                            you're catching up on the latest developments or learning something new, we're here to keep you
                            engaged and informed.
                        </p>
                    </Col>
                </Row>

                {/* News List */}
                <Row className="g-3">
                    {news.map((article, index) => (
                        <Col md={3} key={index}>
                            <NewsCard
                                title={article.title}
                                content={article.content}
                                description={article.description}
                                author={article.author ? article.author : "Unknown"}
                                image={article.urlToImage ? article.urlToImage : "https://asset.kompas.com/crops/ZoLJ3BxkeIGhkJlrFpETM9IB2oI=/0x168:5500x3834/780x390/data/photo/2022/01/11/61dd7a1b1e57e.jpg"}
                                url={article.url}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;

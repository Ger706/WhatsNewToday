import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewsCard: React.FC<any> = ({ title, content, description, author, image, url, publish }) => {
    const navigate = useNavigate();
    const news = {
        title,
        content,
        description,
        author,
        image,
        url,
        publish
    };
    const handleCardClick = () => {
        navigate(`/news-detail`, { state: { news } });
    };

    return (
        <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <Card className="shadow-sm" style={{ maxWidth: "300px", height: "380px" }}>
                <Card.Img
                    src={image}
                    className="img-fluid rounded-top w-100 object-fit-cover"
                    style={{ height: "13vw" }}
                />
                <Card.Body style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="text-muted fw-semibold" style={{ marginBottom: "10px", flexShrink: 0 }}>
                        By: {author}
                    </div>
                    <Card.Text
                        className="text-muted fw-semibold"
                        style={{
                            textAlign: "justify",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            height: "60px",
                            flexGrow: 1,
                        }}
                    >
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsCard;

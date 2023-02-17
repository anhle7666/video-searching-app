import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ListVideo.css";

const ListVideo = ({ query }) => {
    const [videos, setVideo] = useState([]);
    const [loadding, setIsLoadding] = useState(true);
    const ApiKEY = "AIzaSyBr57do5U4SJ4I8hq1m8DV3K5ZRFuJND_g";

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoadding(false);
            const res = await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                    params: {
                        q: query,
                        part: "snippet",
                        maxResults: 10,
                        type: "video",
                        key: ApiKEY,
                        forDevoloper: true,
                    },
                },
            );
            setVideo(res.data.items);
        };
        fetchVideos();
    }, [query]);

    if (loadding) {
        return (
            <>
                <span className="spinner"></span>
            </>
        );
    }

    return (
        <>
            {videos.map((video) => (
                <a
                    key={video.id.videoId}
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="video">
                        <img
                            className="video-thumbnails"
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                        />
                        <div>
                            <h3 className="video-title">
                                {video.snippet.title}
                            </h3>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
};

export default ListVideo;

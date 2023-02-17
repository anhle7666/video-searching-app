import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ListVideo.css";
import "../css/spinner.css";
const ListVideo = ({ query }) => {
    const [videos, setVideo] = useState([]);
    const [loadding, setIsLoadding] = useState(true);
    const ApiKEY = "AIzaSyD87Nl5_Ooy6I8AnFdaS-olNpEALF9hrXs";

    useEffect(() => {
        const fetchVideos = async () => {
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
            setIsLoadding(false);
        };
        fetchVideos();
    }, [query]);

    if (loadding) {
        return (
            <div>
                <span class="loader"></span>
            </div>
        );
    }

    return (
        <>
            {videos.map((video) => (
                <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div key={video.id.videoId} className="video">
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

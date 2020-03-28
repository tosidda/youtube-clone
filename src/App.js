import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';



export default function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    function onVideoSelect (video) {
        setSelectedVideo(video);
    }

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyBPKZXVfcin0lgNYln_rgiNAmzss54tAUQ',
            q: searchTerm
        }
    });
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return (
        <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

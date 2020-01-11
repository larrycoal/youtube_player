import React from 'react'
import Search from './Search'
import youtube from '../Apis/youtube'
import VideoList from './videoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount = ()=>{
        this.onFormSubmit('React')
    }

    onFormSubmit = async (term) => {
        const KEY = 'AIzaSyC0YdDSuOdZKegj3r30NIPG8UaeqdiLX2M'
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                key: KEY,
                maxResults: 5,
                q: term
            }
        })
        console.log(response)
        this.setState({ videos: response.data.items })
        this.onSelectedVideo(this.state.videos[0])
    }

    onSelectedVideo = (video) => {
        this.setState({ selectedVideo: video })

    }
    
    render() {
        return (
            <div className="ui container">
                <Search onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                        <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
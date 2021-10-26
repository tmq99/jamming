import React from 'react'
import './Tracklist.css'
import Track from '../Track/Track'


class Tracklist extends React.Component {
    render() { 
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track 
                        onRemove={this.props.onRemove} 
                        onAdd={this.props.onAdd}
                        isRemoval={this.props.isRemoval} 
                        track={track}
                        key={track.id}/>
                    })
                }
            </div>
        )
    }
}

export default Tracklist
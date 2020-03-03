import React from 'react'
import { connect } from 'react-redux'
import { IfAuthenticated } from './Authenticated'

import { getUpComingPosts } from '../actions/postListActions'
import MeetupPost from './MeetupPost'




class MeetupList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            testPosts: [1, 2, 3, 4, 5, 6, 7, 8],
            skillLevel: ""
        }

        this.handleChange = this.handleChange.bind(this)

    }



    handleChange = (e) => {
        this.setState({
            skillLevel: e.target.value
        })
    }

    componentDidMount() {
        this.props.dispatch(getUpComingPosts(this.props.currentLocation)) //dispatch the action from postListActions
        
    }



    render() {
        let today = new Date();
        let upPosts = this.props.upcomingposts.filter((newestposts) => {
        // newestpost is array of all postsby location
                    
            let postTime = new Date(newestposts.dateTime.split(' ').join(''))
            // postTime variable format time of a post in yymmdd hh:mm
            // delete space between date and T
            
            console.log(postTime)
            return postTime.getTime() > today.getTime()
            //comparing time posted and current date+time
            })

        return (
            <div className="meetupList">
                <h2>{this.props.location.name}</h2>
                
                <form className="">
                    <select className="skillDropdown" value={this.setState.skillLevel} onChange={this.handleChange}>
                        <option value="">--Select your skill level--</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </form>
                
                <button onClick={this.props.handleClick} className="addButton"> + </button>

                <div className="cardList">
                    {upPosts.map((function upComingPost(newposts, idx) {
                        console.log(newposts)
                        return <MeetupPost key={idx} currentPost={newposts} />})
                    )}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.postList,
        location: state.currentLocation,
        upcomingposts: state.postList, // from PostListReduer reducer
    }
}

export default connect(mapStateToProps)(MeetupList)
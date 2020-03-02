import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getLocations, setCurrentActivity } from '../actions/index'
import { setCurrentLocation } from '../actions/index'
import { getCurrentActivity } from '../actions/index'




class Locations extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.dispatch(getCurrentActivity(this.props.match.params.activity))
    }


    handleClick(location) {
        this.props.dispatch(setCurrentLocation(location)) // sets the global state of currentLocation
    }

    render() {
        
        let activity = this.props.currentActivity
        return (
            <div className='wrapper'>
                
                <div className='wrapperBody'>
                   
                    <div className='widgetWrapper'>
                        <img src={activity.photo} className='TrailforksWidgetMap' alt="locations pinpointed on Wellington map" />
                    </div>

                    <div className='locationWrapper'>
                    
                        <div className='loc-btn'>
                        <h1>{activity.name}</h1>
                        <div className='locationBtns'>
                            {this.props.locations.map(location => {
                                return <Link to={`/${this.props.currentActivity.name}/${location.id}`} className='links'>
                                    <button className='btn btn-outline-primary' key={location.id} onClick={() => this.handleClick(location)}>{location.name}</button>
                                </Link>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        currentActivity: state.currentActivity,
        locations: state.locations,
        currentLocation: state.currentLocation
    }
}

export default connect(mapStateToProps)(Locations)
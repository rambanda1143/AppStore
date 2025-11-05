import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css'
export default class AppItem extends Component {
  

  render() {
    const {apps}=this.props
    const {appId,appName,imageUrl,category}  =apps
    return (
      <div className='app-container'>      
             <img className='app-image' src={imageUrl}/>
             <p>{appName}</p>
        
      </div>
    )
  }
}

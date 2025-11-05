
import React, { Component } from 'react'
import './index.css'
export default class TopSession extends Component {
state={searchInput:''}
handler=(event)=>{
    this.setState({searchInput:event.target.value})
    

}
  render() {
    const {searchInput}=this.state
    return (
      <div className='top-main-container'>
        <div>
            <h2 className='app-title'>APP Store</h2>
        </div>
           
           
          
      </div>
    )
  }
}

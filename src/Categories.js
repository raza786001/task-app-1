import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, getCategories} from './actions/userActions';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Categories extends Component {
    state = {
        loaderSpinner: true,
        getUrl : ''
      }

      

    componentDidMount(){
        this.props.getUsers()
        setTimeout(function() { //Start the timer
            this.setState({loaderSpinner: false}) //After 1 second, set render to true
        }.bind(this), 5000)
    }
    render() {
        const {categories} = this.props.categories
        // console.log(categories)

        return (
            <div>
                {this.state.loaderSpinner ?
                 <Spinner
                    as="span"
                    variant="success"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="grow"/>
                : 
                <>
                    <h3 >{categories.title}</h3> 
                    <h3 >Director: {categories.episode_id}</h3>  
                </>
                }
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({categories:state.categories})

const mapDispatchToProps = dispatch => ({
    getCategories: (payload) => dispatch(getCategories(payload)),
    getUsers: () => dispatch(getUsers())
  });

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
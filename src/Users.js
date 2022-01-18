import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, getCategories} from './actions/userActions';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
const navigate = useNavigate();

 class Users extends Component {
    state = {
        loaderSpinner: true,
        getUrl : ''
      }

      getLinkCategory = (url) => {
          this.setState({
              getUrl : url
          })
          console.log(this.state.getUrl);
          if(this.state.getUrl){
              console.log("USUSUS ", this.state.getUrl);
              this.props.getCategories(this.state.getUrl)
            //   this.history.pushState(null, 'categories');
              navigate('/categories');
          }
      }

    componentDidMount(){
        this.props.getUsers()
        setTimeout(function() { //Start the timer
            this.setState({loaderSpinner: false}) //After 1 second, set render to true
        }.bind(this), 5000)
    }
    render() {
        const {users} = this.props.users
        // console.log(users)

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
                    {/* {users.map(u => 
                        <React.Fragment key={u.id}>
                            <h3 >{u.name}</h3> 
                        </React.Fragment>
                    )} */}
                    <h3 >{users.name}</h3> 
                    <h3 >{users.homeworld}</h3> 
                    <h6>Movies Links: </h6>
                    {users.films.map(mv =>
                        <p onClick={()=>{this.getLinkCategory(mv)}}>{mv}</p> 
                    )}
                    <h6>Vehicles Links: </h6>
                    {users.vehicles.map(vh =>
                        <p onClick={()=>{this.getLinkCategory(vh)}}>{vh}</p> 
                    )}
                </>
                }
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

const mapDispatchToProps = dispatch => ({
    getCategories: (payload) => dispatch(getCategories(payload)),
    getUsers: () => dispatch(getUsers())
  });

export default connect(mapStateToProps, mapDispatchToProps)(Users)
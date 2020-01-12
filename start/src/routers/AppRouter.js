import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Logout from '../components/LogoutPage';
import {connect} from 'react-redux';

class AppRouter extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchEnable:false
    }
  }
  showSearchFlag=()=>{
    this.setState({
      searchEnable:true
    })
  }
  render(){
    return (
      <BrowserRouter >
      <div>
        <Header />
        
        <Switch>
          <Route path="/" component={Home} exact showSearchFlagFn={this.showSearchFlag} />
          <Route exact path="/search" authed={this.props.userdata.count} component={Search}/>
          <Route path="/logout" component={Logout} />
          <Route component={NotFoundPage} />
        </Switch>
        
        <Footer/>
      </div>
    </BrowserRouter>
    )
  }
}
 
const mapStateToProps = state => {
  return {
    userdata: state.getUserInfo.userdata,
    error: state.getUserInfo.error
  }
};

export default connect(mapStateToProps)(AppRouter);

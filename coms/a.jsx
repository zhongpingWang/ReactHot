import React,{Component} from 'react'
 


class NoMatchMe extends Component {

	onShow(){
		console.log(9);
	}

  render() {
    return (  <div onClick={this.onShow}>405</div> )
  }
}

export default NoMatchMe
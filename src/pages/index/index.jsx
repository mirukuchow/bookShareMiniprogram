import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";

//navBar Component
export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '猫本书友'
  }

  state = {
    books: []
  }

  constructor(props){
    super(props);
    this.state={
      current: 0
    }
  }

  async componentWillMount() {
    const response = await Taro.request({
      url: `${ API_DB }/books`
    })
    console.log(response)

    this.setState({
      books: response.data
    })

  }

  render(){
    const { books } = this.state

    return(
      <View className='index'>
        Home
      </View>
    )
  }
}

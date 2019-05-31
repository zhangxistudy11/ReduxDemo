/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, { Component } from 'react'
import {
    View,
    TextInput,
    Button,
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.inputValue = '';
    }

    render(){
        //todo:dispatch哪里来的
        let { dispatch } = this.props;
        //点击事件触发action，dispatch出去一个新的对象
        return (
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{flex:1, borderWidth: 1, borderColor: '#cccccc', textAlign: 'center'}}
                    onChangeText={text => this.inputValue = text}
                />
                <Button title="Add Todo" onPress={() => dispatch(addTodo(this.inputValue))}/>
            </View>
        )
    }
}
//使组件和Store连接起来,组件的props能拿到dispatch
export default connect()(AddTodo)
// export default AddTodo
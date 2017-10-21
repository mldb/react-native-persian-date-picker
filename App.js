import React,{Component} from 'react';
import { View } from 'react-native';
import PersianDatePicker from './PersianDatePicker';

export default class App extends Component {

    render() {
        return (
            <View>
                <PersianDatePicker />
            </View>
        );
    }
}
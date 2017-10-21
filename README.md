# react-native-persian-date-picker
a simple persian date picker for react native



# Installing:
   # Step 1:
      npm i react-native-persian-date-picker --save
   # Step 2:
     react-native link react-native-picker
     
# Usage
```javascript
import PersianDatePicker from 'react-native-persian-date-picker';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PersianDatePicker />
      </View>
    );
  }
}
```
# props

| prop          |      desc     | default  |
| ------------- |:-------------:| -----:   |
|    style      | ظاهر کلی تاریخ انتخاب شده |     |
| textStyle     | ظاهر متن تاریخ انتخاب شده       |       |
| pickerConfirmBtnText | تکست دکمه ی انتخاب تاریخ      |    انتخاب    |
| pickerTitleText | تکست هدر انتخاب کننده تاریخ      |    تاریخ را انتخاب کنید    |
| pickerCancelBtnText | تکست دکمه ی انصراف       |    انصراف    |
| pickerCancelBtnColor | رنگ دکمه ی انصراف بصورت RGBA      |    [0,0,0,1]    |
| pickerToolBarFontSize | اندازه فونت هدر انتخاب کننده تاریخ      |    ۱۸    |
| pickerFontSize | اندازه فونت انتخاب کننده      |    ۱۸    |
| pickerToolBarBg | رنگ بکگراند هدر انتخاب کننده      |    [232, 232, 232, 1]    |
| pickerConfirmBtnColor | رنگ دکمه ی انتخاب تاریخ      |    [0,0,0,1]    |
| pickerTitleColor | رنگ تکست هدر انتخاب کننده      |    [0,0,0,1]    |
| pickerBg | رنگ بک گراند انتخاب کننده      |    [255, 255, 255,255]    |
| yearCount | تعداد سال های قابل نمایش      |    ۳۰    |
| selectedDate | تاریخ از پیش انتخاب شده      |        |
| minDate | تاریخ شروع نمایش      |        |
| onConfirm | متدی که با زدن دکمه انتخاب تاریخ فراخوانده میشود      |        |
| onCancel | متدی که با انصراف از انتخاب تاریخ فراخوانده میشود      |        |
| onSelect | متدی که با هربار تغییر تاریخ فراخوانده میشود      |        |


# Example
  ```javascript
      
    import React, { Component } from 'react';
    import {
      Platform,
      StyleSheet,
      Text,
      View
    } from 'react-native';
    import PersianDatePicker from 'react-native-persian-date-picker';


    export default class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          selectedDay: undefined,
          selectedYear: undefined,
          selectedMonth: undefined
        };
      }
      onDateConfirm=data=>{
        this.setState({ selectedYear: data[0], selectedMonth: data[1], selectedDay: data[2] });
      }
      render() {
        return (
          <View style={styles.container}>
            <PersianDatePicker onConfirm={this.onDateConfirm}  />
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
    }); 
 ```


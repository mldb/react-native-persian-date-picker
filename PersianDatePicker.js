import React,{Component} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import _ from 'lodash';
import Picker from 'react-native-picker';
import moment from 'moment-jalaali';

export default class PersianDatePicker extends Component {
constructor(props){
    super(props);
    this.state={
        year:undefined,
        day:undefined,
        month:undefined
    };
}
static defaultProps ={
    year:1396,
    month:1,
    day:1,
    style:{},
    textStyle:{},
    pickerConfirmBtnText: 'انتخاب',
    pickerTitleText: 'تاریخ را انتخاب کنید',
    pickerCancelBtnColor: [0,0,0,1],
    pickerToolBarFontSize:18,
    pickerFontSize:18,
    pickerToolBarBg:[232, 232, 232, 1],
    pickerConfirmBtnColor: [0,0,0,1],
    pickerTitleColor: [0,0,0,1],
    pickerBg: [255, 255, 255,255],            
    pickerCancelBtnText: 'انصراف',
    yearCount:30,
    onConfirm:(data)=>{},
    onCancel: (data)=>{},
    onSelect: (data)=>{},

}

    render() {
        this.renderPicker();
        const {year,month,day} = this.getSelectedDate();
        return (
            <TouchableWithoutFeedback onPress={()=>Picker.show()} >
                <View style={[styles.containerStyle,this.props.style]}> 
                    <Text style={[styles.textStyle,this.props.textStyle]}>
                        {year}
                    </Text>
                    <Text style={[styles.textStyle,this.props.textStyle]}>
                        {this.getMonthString(month)}
                    </Text>
                    <Text style={[styles.textStyle,this.props.textStyle]}>
                        {day}                   
                    </Text>
                </View>
           </TouchableWithoutFeedback>
        );
    }
    renderPicker=()=>{
        const {
            pickerConfirmBtnText,
            pickerTitleText,
            pickerCancelBtnColor,
            pickerToolBarFontSize,
            pickerFontSize,
            pickerToolBarBg,
            pickerConfirmBtnColor,
            pickerTitleColor,
            pickerBg,            
            pickerCancelBtnText
        } = this.props;
        const {year,month,day}=this.state;
        Picker.init({
            pickerData: this._createDates(),
            pickerConfirmBtnText,
            pickerTitleText,
            pickerCancelBtnColor,
            pickerToolBarFontSize,
            pickerFontSize,
            pickerToolBarBg,
            pickerConfirmBtnColor,
            pickerTitleColor,
            pickerBg,            
            pickerCancelBtnText,
            selectedValue:[year,this.getMonthString(month),day],
            onPickerConfirm: data => {
                data[1]=  this.getMonthNumber(data[1]);
                this.setState({year: data[0] ,day: data[2] ,month: data[1]});        
                this.props.onConfirm(data);
            },
            onPickerCancel: data => {
                data[1]=  this.getMonthNumber(data[1]);                
                this.props.onCancel(data);
            },
            onPickerSelect: data => {
                data[1]=  this.getMonthNumber(data[1]);                                
                this.props.onSelect(data);                
            }
            
        });
        Picker.hide();        
    }
    getMonthString(number){
        switch(number){
            case 1:
                return 'فروردین';
            case 2:
                return 'اردیبهشت';
            case 3:
                return 'خرداد';
            case 4:
                return 'تیر';
            case 5:
                return 'مرداد';
            case 6:
                return 'شهریور';
            case 7:
                return 'مهر';
            case 8:
                return 'آبان';
            case 9:
                return 'آذر';
            case 10:
                return 'دی';
            case 11:
                return 'بهمن';
            case 12:
                return 'اسفند';
        }
        return number;
    }
    getMonthNumber(string) {
        switch (string) {
            case 'فروردین':
                return 1;
            case 'اردیبهشت':
                return 2;
            case 'خرداد':
                return 3;
            case 'تیر':
                return 4;
            case 'مرداد':
                return 5;
            case 'شهریور':
                return 6;
            case 'مهر':
                return 7;
            case 'آبان':
                return 8;
            case 'آذر':
                return 9;
            case 'دی':
                return 10;
            case 'بهمن':
                return 11;
            case 'اسفند':
                return 12;
        }
        return number;
    }
    getSelectedDate(){
        var year, day, month;        
        if( this.state.day==undefined){
            if(this.props.selectedDate == undefined){
                var _now=moment();
                year=_now.jYear();
                month=_now.jMonth()+1;
                day=_now.jDate();
            }else{
                const date= this.props.selectedDate.split('/');
                year=date[0];
                month=date[1];
                day=date[2];
            }
        }else{
            year=this.state.year;
            month=this.state.month;
            day=this.state.day;
        }
        return {year,day,month};
    }

    _createDates(){
        var MaxMonth;
        var MaxYear;
        var MaxDay;
        if(this.props.maxDate==undefined){
            maxDate=moment();
            maxDate.add(3,'jYear');
            var MaxMonth=maxDate.jMonth();
            var MaxYear=maxDate.jYear();
            var MaxDay=maxDate.jDate();
        }else{
            m =moment(this.props.maxDate,'jYYYY/jM/jD');
            var MaxMonth=m.jMonth();
            var MaxYear=m.jYear();
            var MaxDay=m.jDate();
        }
        m =this.props.minDate==undefined ? moment() : moment(this.props.minDate,'jYYYY/jM/jD');
        var month=m.jMonth();
        var year=m.jYear();
        var day=m.jDate();

        let data = [];
        let len = this.props.yearCount ;
        for(let i=0;m.jYear()<=MaxYear;i++){
            var _year=m.jYear();
            let months = [];
            for(let j=0;j<12;j++){
                var daysLength= (moment.jIsLeapYear(_year)) ? 30 : 29 ;
                if(j!=11) { daysLength=30; }
                if(j<=5){daysLength=31}
                if(_year==MaxYear&&j>MaxMonth) break;
                if(year==_year&&j<month) continue;
                let days=[];
                for(let k=0;k<daysLength;k++){
                    if(_year==MaxYear&&j==MaxMonth&&k==MaxDay) break;
                    if(_year==year&&month==j&&k<day-1) continue;
                    days.push(k+1);
                }
                let _days = {};
                _days[this.getMonthString(j+1)] = days;
                months.push(_days);
            }
            let _data = {};
            _data[_year] = months;
            data.push(_data);
            m.add(1,'jYear');    
        }
        return data;
        
    }
}

const styles={
    containerStyle:{
        padding:3,
        justifyContent:'space-around', 
        flexDirection:'row', 
        alignItems:'center', 
        borderColor:'#424242', 
        borderWidth:1, 
        borderRadius:10, 
        marginLeft:25, 
        marginRight:25, 
        backgroundColor:'white', 
        minWidth:150,
    },
    textStyle:{
       
    }
}

import { LightningElement } from 'lwc';

export default class Combobox extends LightningElement 
{
    selelcted;
    get options()
    {
       return [
            {label:'India', value:'IND'},
            {label:'America', value:'USA'},
            {label:'Australia', value:'AUS'},
            {label:'Japan', value:'JPN'},
        ]
    }
    Handlechange(event)
    {
        this.selected=event.target.value;
    }
}
           
import { LightningElement } from 'lwc';

export default class Addition extends LightningElement
 {
    value1;
    value2;
    result;
    ChangeFirst(event)
    {
        this.value1=event.target.value;
    }
    Changesecond(event)
    {
        this.value2=event.target.value;
    }
    Add()
    {
       this.result=parseInt(this.value1)+parseInt(this.value2);
    }
 }
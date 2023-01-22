import { LightningElement } from 'lwc';

export default class Parentapiexample extends LightningElement
 {
    parent='Parent Component';
    Handleclick()
    {
        this.template.querySelector('c-apiexample').showmessage();
    }

 }
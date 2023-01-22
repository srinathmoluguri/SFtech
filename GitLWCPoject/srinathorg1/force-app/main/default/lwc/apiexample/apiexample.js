import { LightningElement,track,api } from 'lwc';

export default class Apiexample extends LightningElement
 {
    @api child='child component';
    @api showmessage()
    {
        alert('This is invoked by child');
    }
 }
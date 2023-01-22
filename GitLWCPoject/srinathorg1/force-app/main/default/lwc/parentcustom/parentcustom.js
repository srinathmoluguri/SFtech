import { LightningElement } from 'lwc';

export default class Parentcustom extends LightningElement 
{
    counterAmount=1;
    displaymessage()
    {
        alert(this.counterAmount);
    }
}
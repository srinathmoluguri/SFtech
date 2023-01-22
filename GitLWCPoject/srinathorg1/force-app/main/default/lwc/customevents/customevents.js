import { LightningElement } from 'lwc';

export default class Customevents extends LightningElement 
{
    count;
    Handleclick()
    {
        this.dispatchEvent(new CustomEvent('message'));
    }
}
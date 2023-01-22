import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/LwcApexclass.getAccounts'
const cols=[
            {label:'AccountName', fieldName:'Name'},
            {label:'AccountPhone', fieldName:'Phone'},
            {label:'AccountFax', fieldName:'Fax'},
            {label:'AccountIndustry', fieldName:'Industry'},
];
export default class ShowHideAccount extends LightningElement 
{
    ShowAccounts='showAccounts';
    isVisible=true;
    columns=cols;
    accrecords;
    handleclick(event)
    {
        const label=event.target.label;
        if(label=='showAccounts')
        {
            this.ShowAccounts='HideAccounts';
            this.isVisible=true;
        }
        else if(label=='HideAccounts')
        {
            this.ShowAccounts='showAccounts'
            this.isVisible=false;
        }
    }
    connectedCallback()
    {
        getAccounts().then(result=>{

            this.accrecords=result;
        })
        .catch(error=>{
            console.log('error occured'+error);

        })
    }
}

import { LightningElement,api} from 'lwc';
import getcontacts from '@salesforce/apex/LwcApexclass.getcontacts';
const cols=[
    /*{label:'AccountName', fieldName:'Name'},
    {label:'AccountPhone', fieldName:'Phone'},
    {label:'AccountFax', fieldName:'Fax'},
    {label:'AccountIndustry', fieldName:'Industry'}*/
    {label:'LastName', fieldName:'LastName'},
    {label:'ContactPhone', fieldName:'Phone'},
    {label:'ConatctFax', fieldName:'Fax'},
];
export default class AccountidRelatedcontacts extends LightningElement
 {
    columns=cols;
    @api recordId;
    accrecords;
    contactsDisplay()
    {
        getcontacts({accid:this.recordId}).then(result=>{
         
          this.accrecords=result;


    })
}
 }
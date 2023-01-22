import { LightningElement } from 'lwc';
import DisplayAcc from '@salesforce/apex/CreateAccount.DisplayAcc';
const cols=[
    {label:'AccountName', fieldName:'Name'},
    {label:'AccountPhone', fieldName:'Phone'},
    {label:'ContactName', fieldName:'Contacts.LastName'}
];
export default class Craetemultiple extends LightningElement
 {
   columns=cols;
   accdata;
   handleclick()
   {
    DisplayAcc().then(result=> {
        this.accdata = result;
   })
          .catch(error=>{
             console.log('Errors Occured...: '+ error);
})
    
       
 }
}
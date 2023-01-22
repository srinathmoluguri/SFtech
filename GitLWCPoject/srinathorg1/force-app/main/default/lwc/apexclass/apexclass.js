import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/LwcApexclass.getAccounts';
import { getDataConnectorSourceFields } from 'lightning/analyticsWaveApi';
import CreateAccount from '@salesforce/apex/LwcApexclass.CreateAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_Fax from '@salesforce/schema/Account.Fax';
export default class Apexclass extends LightningElement 
 {
    accounts;
    accountid;
    accountrecords={
        Name:ACCOUNT_NAME,
        Phone:ACCOUNT_PHONE,
        Fax:ACCOUNT_Fax,
    };

   // @wire(getAccounts)Accountsget;
  /* @wire(getAccounts)
   Accountsget({data,error})
   {
       if(data)
       {
        this.accounts=data;
       }
       else if(error)
       {
        Console.log(error);
       }
   }*/
 /*  Handleclick()
   {
    getAccounts().then(result=>{
        this.accounts=result; 
    })
    .catch(error=>{
        Console.log('eror occured'+error);
    })
   }*/
   NameChange(event)
   {
    this.accountrecords.Name=event.target.value;
   }
   PhoneChange(event)
   {
    this.accountrecords.Phone=event.target.value;
   }
   FaxChange(event)
   {
    this.accountrecords.Fax=event.target.value;
   }
   CreateAcc()
   {
    CreateAccount({acc:this.accountrecords}).then(result=>{

    this.accountrecords={}; 
     this.accountid=result.Id;
    })
    .catch(error=>{
        Console.log('eror occured'+error);
    })
   }
 }
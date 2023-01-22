import { LightningElement } from 'lwc';
import AccountAcc from '@salesforce/apex/CreateAccount.AccountAcc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Fax from '@salesforce/schema/Account.Fax';

export default class CreateAccount extends LightningElement
 {
    accrecordid;
    accrecord=
    {
         Name:Account_Name,
         Phone:Account_Phone,
         Fax:Account_Fax
    }
    Namechange(event)
    {
        this.accrecord.Name=event.target.value;
    }
    Phonechange(event)
    {
        this.accrecord.Phone=event.target.value;
    }
    Faxchange(event)
    {
        this.accrecord.Fax=event.target.value;
    }
    Handleclick()
    {
        AccountAcc({acc:this.accrecord}).then(result=>{
            this.accrecordid=result.Id;

        })
        .catch(error=>{
            console.log('error occures'+error);

        })
       
    }
 }
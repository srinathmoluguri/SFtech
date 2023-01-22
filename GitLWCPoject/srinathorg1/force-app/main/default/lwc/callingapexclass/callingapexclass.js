import { LightningElement } from 'lwc';
import AccountAcc from '@salesforce/apex/CreateAccount.AccountAcc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Fax from '@salesforce/schema/Account.Fax';
 const cols=[
    
    {label:'AccountName', value:'Name'},
    {label:'AccountPhone', value:'Phone'},
    {label:'AccountFax', value:'Fax'},

];
export default class Callingapexclass extends LightningElement 
{
    accountid;
    Name;Phone;Fax;
    columns=cols;
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
            this.Name=result.Name;
            this.Phone=result.Phone;
            this.Fax=result.Fax;
            this.accountid=result.Id;
        })
        .catch(error=>{
          console.log('error occured'+error);
        })
    }
}
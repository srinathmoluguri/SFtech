import { LightningElement } from 'lwc';
import CreateAccount from '@salesforce/apex/LwcApexclass.CreateAccount';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Fax from '@salesforce/schema/Account.Fax';
import Account_Industry from '@salesforce/schema/Account.Industry';

export default class CreateAccRecord extends LightningElement 
{
    accrecordid;
    accrecords=
              {
                Name:Account_Name,
                Phone:Account_Phone,
                Fax:Account_Fax,
                Industry:Account_Industry
              }
  HandleName(event)
  {
    this.accrecords.Name=event.target.value;
  }
  HandlePhone(event)
  {
    this.accrecords.Phone=event.target.value;
  }
  HandleFax(event)
  {
    this.accrecords.Fax=event.target.value;
  }
  HandleIndustry(event)
  {
    this.accrecords.Industry=event.target.value;
  }
  HandleSave()
  {
    CreateAccount({acc:this.accrecords}).then(result=>{
        this.accrecordid=result.Id;
    })
    .catch(error=>{
        console.log('error occured'+error);
    })
  }
}
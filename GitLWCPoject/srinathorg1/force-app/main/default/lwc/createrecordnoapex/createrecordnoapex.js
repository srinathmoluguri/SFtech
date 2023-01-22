import { LightningElement,api } from 'lwc';
import { createRecord, RecordFieldDataType } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Createrecordnoapex extends LightningElement
 {
    accName;
    accIndustry;
    accPhone;
    accFax;
    @api recordId;
    accName(event)
    {
        this.accName=event.target.value;
    }
    accIndustry(event)
    {
        this.accIndustry=event.target.value;
    }
    accPhone(event)
    {
        this.accPhone=event.target.value;
    }
    accFax(event)
    {
        this.accFax=event.target.value;
    }
    CreateAccount()
    {
        const fields=
                       {
                         'Name':this.accName,
                         'Industry':this.accIndustry,
                         'Phone':this.accPhone,
                         'Fax':this.accFax
                       };
        const recordcreate={apiName:'Account', fields};
        createRecord(recordcreate).then(result=>{
                               this.dispatchEvent(new ShowToastEvent({
                                 title:"Success",
                                 message : 'Record Inserted Successfully.',
                                 variant : 'success',
                                mode : 'dismissible'
                               }));

                               alert('Record Created Successfully'+result.id);
                                })
                                
                             .catch(error =>{
                                    console.log('Error While Inserting Account..: '+ error.body.message);

                                    this.dispatchEvent(new ShowToastEvent({
                                                        title : 'Error',
                                                        message : 'Error Occured upon Record Insert.',
                                                        variant : 'error',
                                                        mode : 'dismissible'
                                            }));
                         })
      }
    
 }
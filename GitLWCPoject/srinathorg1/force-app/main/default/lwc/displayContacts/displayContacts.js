import { LightningElement } from 'lwc';
import DisplayAcc from '@salesforce/apex/CreateAccount.DisplayAcc';
import condisplay from '@salesforce/apex/CreateAccount.condisplay';
const cols=[
    /*{label:'AccountName', fieldName:'Name'},
    {label:'AccountPhone', fieldName:'Phone'},
    {label:'AccountFax', fieldName:'Fax'},
    {label:'AccountIndustry', fieldName:'Industry'}*/
    {label:'LastName', fieldName:'LastName'},
    {label:'ContactPhone', fieldName:'Phone'},
    {label:'ConatctFax', fieldName:'Fax'},
];
export default class DisplayContacts extends LightningElement
 {
    opt=[];
    contactrec;
    columns=cols;
    ShowContacts='showcontacts'
    get opt()
    {
        return this.opt;
    }
    HandleClick(event)
    {
        const label=event.target.label;
        if(label=='showcontacts')
        {
            this.ShowContacts='Hidecontacts';
            condisplay({accid:this.value}).then(result=>{
                this.contactrec=result;
            })
        }
        else if(label=='Hidecontacts')
        {
            this.ShowContacts='showcontacts';
            this.contactrec={};

        }
    }

    connectedCallback()
    {
        DisplayAcc().then(result=>{

            let arr=[];
            for(var i=0;i<result.length;i++)
            {
                arr.push({label:result[i].Name, value:result[i].Id});
            }
            this.opt=arr;
        })
        .catch(error=>{
            console.log('error occured'+error);
        })

    }
    
   
    
    HandleChange(event)
    {
        this.value=event.detail.value;
    }
 }
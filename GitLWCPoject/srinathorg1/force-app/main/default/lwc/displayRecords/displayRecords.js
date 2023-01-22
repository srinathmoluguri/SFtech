import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/LwcApexclass.getAccounts';
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
export default class DisplayRecords extends LightningElement
 {
    /*opt=[
        {label:'India', value:'IND'},
        {label:'UnitedStates', value:'USA'},
        {label:'UnitedKingdom', value:'UK'},
        {label:'Australia', value:'AUS'},
    ]*/
    //Names='IND';
    value;
    accopt=[];
    columns=cols;
    accrecords;
    get opt()
    {
        return this.accopt;
    }
    ClickAccount()
    {
        getcontacts({accid:this.value}).then(result=>{ 
          
            this.accrecords=result;
        })
    }
    connectedCallback()
    {
        getAccounts().then(result=>{

            //this.accrecords=result; 

            let arr=[];
            for(var i=0;i<result.length;i++)
            {
                arr.push({label:result[i].Name, value:result[i].Id});
            }
            this.accopt=arr;
        })
        .catch(error=>{
            Console.log('eror occured'+error);
        })
       
    }
    changeValue(event)
    {
        this.value=event.detail.value;
    }
 }
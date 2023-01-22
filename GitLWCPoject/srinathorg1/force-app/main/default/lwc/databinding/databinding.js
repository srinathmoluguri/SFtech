import { LightningElement } from 'lwc';

export default class Databinding extends LightningElement 
{
    showtext=false;
    title='srinath';
    HandleClick()
    {
        this.showtext=true;
    }
    get gettitle()
    {
        return this.title=this.title.toUpperCase()
    }
     Programming=[

         {
            id:"1234" ,
            lan:"python"
         },
         {
            id:"12341",
            lan:"Java"
         },
         {
            id:"12342" ,
            lan:"Devops"
         },
         {
            id:"12343",
            lan:"salesforce"
         },
     ];
}
import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CandieTile extends NavigationMixin(LightningElement) {
    @api pass_val;
    @api flagtile;
    redirectToContactPage(event) {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : event.target.dataset.id,
                objectApiName: 'ProductStore__c',
                actionName: 'view'
            }
        });
    }

    navigateToTabPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
               // apiName: 'LWC_Recipes'
               apiName:'Candies_Popup',
            }
        });
    }
}
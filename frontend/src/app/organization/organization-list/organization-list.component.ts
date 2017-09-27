import { Component } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { Organization } from '../organization.model';

@Component({
  selector: 'volontulo-organization-list',
  templateUrl: './organization-list.component.html',
  providers: [OrganizationService]
})
export class OrganizationListComponent {

  organizations: Organization[];

  constructor(private orgService: OrganizationService) {
    this.orgService.query().subscribe((orgs: Organization[]) => this.organizations = orgs)
  }
}

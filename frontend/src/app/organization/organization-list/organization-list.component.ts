import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { Organization } from '../organization.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'volontulo-organization-list',
  templateUrl: './organization-list.component.html',
})
export class OrganizationListComponent implements OnInit {

  organizations$: Observable<Organization[]>;

  ngOnInit() {
    this.organizations$ = this.orgService.organizations$
  }

  constructor(private orgService: OrganizationService) {
  }
}

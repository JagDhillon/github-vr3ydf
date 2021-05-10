import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-plan',
  templateUrl: './current-plan.component.html',
  styleUrls: ['./current-plan.component.scss']
})
export class CurrentPlanComponent implements OnInit {
  plans = [
    { title: 'Lite', description: 'Max 10 Sale limit a day', price: '0', 'Registers Per Site': '1', 
        features: [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] },
    { title: 'Essential', description: 'Up to 100 Sale limit a day', price: '20', 'Registers Per Site': '2', 
        features: [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ] },
    { title: 'Premium', description: 'For Multi Site Operations', price: '70', 'Registers Per Site': '4', 
        features: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] },
    { title: 'Enterprise', description: 'For Franchises', price: 'Contact Us', 'Registers Per Site': '4+', 
        features: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] },
  ];
  plan_current = 0;
  plan_features = [
    'POS',
    'Online Ordering',
    '3rd Party Integration',
    'Marketing',
    'Loyalty',
    'CRM',
    'Business Insights',
    'Rostering',
    'Accounting',
    'Payroll',
    'Stock Managment',
    'Multi Sites'
  ];

  constructor() { }

  ngOnInit() {
  }

}
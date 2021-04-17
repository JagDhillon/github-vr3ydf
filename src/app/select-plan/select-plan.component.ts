import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {

  busName = "Jags' Kitchen"
  plans = [
    { name: 'Lite Plan', cost: '0', color: '#F8D7D7', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
    { name: 'Essential Plan', cost: '20', color: '#D7F8F2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
    { name: 'Premium Plan', cost: '70', color: '#E3CF14', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
    { name: 'Enterprise Plan', cost: '100', color: '#AF8EF7', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
    { name: 'Pause Plan', cost: '5', color: '#8EF7B1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
  ];
  plan_selected = "1";

  constructor() { }

  ngOnInit() {
  }

}

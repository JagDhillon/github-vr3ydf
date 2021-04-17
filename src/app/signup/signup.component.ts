import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  step = 1;

  best_describes = [
    { icon: "add_business", description: "New Business" },
    { icon: "storefront", description: "Existing Business" }
  ];
  selected_describe = 0;

  type_business = [
    { icon: "fastfood", description: "Fast Food" },
    { icon: "dinner_dining", description: "Restaurant" },
    { icon: "local_bar", description: "Bar" },
    { icon: "local_shipping", description: "Food Truck" },
    { icon: "local_mall", description: "Retail" },
    { icon: "content_cut", description: "Saloon" },
    { icon: "local_grocery_store", description: "Grocery" },
    { icon: "bakery_dining", description: "Other" }
  ];
  selected_type = 0;

  serve_customers = [
    { type: "Order At The Counter", selected: 1 },
    { type: "Order At The Table", selected: 0 },
    { type: "Self Order QR CODE", selected: 1 },
    { type: "Online Order", selected: 0 },
    { type: "Order Ahead", selected: 1 },
    { type: "Uber Eats", selected: 1 },
    { type: "Doordash", selected: 0 },
    { type: "Deliveroo", selected: 1 },
    { type: "Menulog", selected: 0 }
  ];

  how_many = [
    { icon : 'storefront', description: 'One Store', description_num: '1'},
    { icon : 'storefront', description: 'Two To Four Stores', description_num: '2-4'},
    { icon : 'storefront', description: 'Five Plus Stores', description_num: '5+'}
  ];
  how_many_selected = 0;

  registers = [
    { icon : 'point_of_sale', description: 'One Register', description_num: '1'},
    { icon : 'point_of_sale', description: 'Two Registers', description_num: '2'},
    { icon : 'point_of_sale', description: 'Three Or More Register', description_num: '3+'}
  ];
  register_selected = 0;

  constructor() {}

  ngOnInit(): void {}
}

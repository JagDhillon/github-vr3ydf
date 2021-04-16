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

  constructor() {}

  ngOnInit(): void {}
}

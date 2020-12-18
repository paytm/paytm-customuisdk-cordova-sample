import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"],
})
export class PaymentPage implements OnInit {
  navigationExtra: NavigationExtras;

  constructor(private router: Router) {
    // this.route.queryParams.subscribe((params) => {
    // })
    this.navigationExtra = this.router.getCurrentNavigation().extras;
    console.log(this.navigationExtra);
  }

  ngOnInit() {}

  onClick(path: string) {
    this.router.navigate([path], this.navigationExtra);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-save-card",
  templateUrl: "./save-card.page.html",
  styleUrls: ["./save-card.page.scss"],
})
export class SaveCardPage implements OnInit {
  saveCardList: Array<any> = [];
  paymentFlow: string = "";

  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.saveCardList = this.router.getCurrentNavigation().extras.state.savedInstruments;
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
    }
  }

  ngOnInit() {}

  goForSaveCardTranscation(item: any) {
    if (item.cardCvv == undefined || (item.cardCvv as string).length < 3) {
      alert("enter cvv");
    }

    this.customUI
      .goForSavedCardTransaction(
        item.cardDetails.cardId,
        item.cardCvv,
        item.cardDetails.cardType,
        this.paymentFlow,
        item.channelCode,
        item.issuingBank,
        null,
        item.authModes[0]
      )
      .then((res) => {
        alert(JSON.stringify(res));
        this.router.navigate(["/home"]);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.router.navigate(["/home"]);
      });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// import { HomePage } from "../home/home.page";

@Injectable({
  providedIn: "root",
})
export class ApisService {
  prodUrl = "https://securegw.paytm.in/";
  stagUrl = "https://securegw-stage.paytm.in/";
  constructor(private http: HttpClient) {}

  fetchPayOption(isStaging, mid, orderId, txnToken) {
    var urls;
    if (isStaging) {
      urls = this.stagUrl;
    } else {
      urls = this.prodUrl;
    }
    var url = `${urls}theia/api/v2/fetchPaymentOptions?mid=${mid}&orderId=${orderId}&ORDER_ID=${orderId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    const body = {
      head: {
        requestTimestamp: "Time",
        version: "v1",
        channelId: "WAP",
        txnToken: txnToken,
      },
      body: {
        sdkVersion: "Android_1.0",
      },
    };
    console.log(JSON.stringify(body));
    return this.http.post(url, JSON.stringify(body), httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }
}

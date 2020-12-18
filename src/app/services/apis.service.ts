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
    //ToDo implement fetch pay option api to get details.
  }
}

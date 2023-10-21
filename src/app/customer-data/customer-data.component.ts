import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  customerData: any = [];
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiUrl = 'https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1';

    this.http.get(apiUrl).subscribe(
      data => {
        this.customerData = data;
      },
      (error) => {
        this.error = 'Error fetching data';
      }
    );
  }
}

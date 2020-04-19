import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'Infiniti Research Assignment';
  private apiUrl = 'https://reqres.in/api/users?page=';
  elements: any;
  search: any;
  gridView = false;
  page = 1;
  pageSize: number = 6;
  total: number ;

  constructor(private http: HttpClient) {
    this.getData();
  }
  // Rest Api call handler
  getData() {
     this.http.get(this.apiUrl + this.page).pipe(map((res: Response) => res)).subscribe(data => {
      this.elements = data;
      this.page = this.elements.page;
      this.pageSize = this.elements.per_page;
      this.total = this.elements.total;
    // tslint:disable-next-line: no-unused-expression
    }), (error) => console.log(error);
  }

  // Grid or list view selection
  onGridView(event) {
    this.gridView = (event.target.checked) ? true : false;
  }
  // change pager
  pageChanged(page) {
    (this.page === 1) ? this.page++ : this.page--;
    this.getData();
  }
}

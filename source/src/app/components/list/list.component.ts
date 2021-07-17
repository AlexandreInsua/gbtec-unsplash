import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Resource } from '../../models/interfaces';
import { NavigationExtras, Router } from '@angular/router';
import { OperationsService } from '../../services/operations.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resources: Resource[] = []
  page: number = 1
  filter: string = null

  constructor(
    private data: DataService,
    private op: OperationsService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.getResources(this.page)
    this.op.filter.subscribe(filter => {
      console.log(filter)
      this.filter = filter
      if (filter) {
        this.resources = this.resources.filter(r => r.alt_description?.toLowerCase().includes(this.filter.toLowerCase()))
      } else {
        this.page = 1
        this.getResources(this.page)
      }

    })
  }

  getResources(page: number): void {
    this.data.getResources(page).subscribe(
      (data: Resource[]) => {
        if (this.filter) {
          this.resources.push(...data.filter(r => r.alt_description?.toLowerCase().includes(this.filter.toLowerCase())))
        } else {
          this.resources.push(...data)
        }
      },
      error => console.log(error),
      () => console.log(`${this.resources.length} recursos cargados.`)
    )
  }

  onScroll() {
    this.getResources(++this.page)
  }

  onScrollTop() {
    this.page = 1
    this.resources = []
    this.getResources(this.page)
    document.documentElement.scrollTop = 0;
  }

  goToDetail(r: Resource) {
    const navigationExtras: NavigationExtras = {
      state: {
        resource: r
      }
    };
    this.router.navigate(['detalle'], navigationExtras);
  }
}

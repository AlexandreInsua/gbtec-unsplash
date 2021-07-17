import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resource } from '../../models/interfaces';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  suscriptionNav: Subscription = null
  resource: Resource = null
  globe = faGlobe
  instagram = faInstagram
  paypal = faPaypal
  twitter = faTwitter

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.suscriptionNav = this.route.queryParams.subscribe(
      params => {
        this.resource = this.router.getCurrentNavigation().extras.state.resource
      }
    )
  }

  ngOnInit(): void {
    console.log(this.resource)
    if (!this.resource) {
      this.router.navigate([''])
    }

  }

  ngOnDestroy(): void {
    this.suscriptionNav = null;
  }

  goToList() {
    this.router.navigate([''])
  }

}

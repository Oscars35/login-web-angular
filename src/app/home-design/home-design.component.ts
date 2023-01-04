import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home-design',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home-design.component.html',
  styleUrls: ['./home-design.component.scss']
})
export class HomeDesignComponent implements OnInit {
  ngOnInit(): void {
    let moon = document.getElementById("moon");
    let sun = document.getElementById("sun");
    window.addEventListener('scroll', function() {
      let value = window.scrollY;
      moon!.style.top = value * 1.05 + 'px'
      sun!.style.top = value * 1.05 + 'px'
    })
  }

}

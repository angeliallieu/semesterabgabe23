import { Component } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../shared/song';

@Component({
  selector: 'app-alben',
  templateUrl: './alben.component.html',
  styleUrls: ['./alben.component.css']
})
export class AlbenComponent {
  
    song!: Song[];
    
    constructor(private bs: BackendService , private router: Router) { } //es findet eine dependencie injection statt
  
    ngOnInit(): void {
      this.readAll();
    }
    readAll(): void {
      this.bs.getAll().subscribe( //getAll ist eine funktion von readall
            {
              next: (response) => {
                    this.song = response;
                    console.log(this.song);
                    return this.song;
                  },
              error: (err) => console.log(err),
              complete: () => console.log('getAll() completed')
            })
    }
    uniqueSet(): any{
      let mySet = new Set();
      let array = this.song;
      array.forEach(item => mySet.add(item.album));
      return mySet;
    }  
}


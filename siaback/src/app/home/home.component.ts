import { Component } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Song } from '../shared/song';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent //implements OnInit 
{
  song!: Song[];

  constructor(private bs: BackendService) { } //es findet eine dependencie injection statt

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
  delete(id: string): void {
    console.log("id :" ,id );
  } 
}

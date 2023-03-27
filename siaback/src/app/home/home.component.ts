import { Component } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../shared/song';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent //implements OnInit 
{
  song!: Song[];
  deleted = false;

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
  
  delete(id: string): void {
    this.bs.deleteOne(id).subscribe(
      {
        next: (response: any) => {
          console.log('response : ', response);
          if(response.status == 204){
                  console.log(response.status);
                  this.reload(true);
                } else {
                  console.log(response.status);
                  console.log(response.error);
                  this.reload(false);
                }
        },
        error: (err) => console.log(err),
        complete: () => console.log('deleteOne() completed')
    });
  }

  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/');
    location.reload();
  }
}

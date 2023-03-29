import { Component } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Song } from '../shared/song'; //brauche ich das?
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor( private bs: BackendService, private router: Router) {  
  }

  onNewSong(songs: {title:string, artist:string, slength:string, album:string, simage:string }){
    if (!songs.simage){
      songs.simage = "assets/cover/default.png"
    }  
    if (!songs.title){
      songs.title = "Unbekannt"
    }
    if (!songs.artist){
      songs.artist = "Unbekannt"
    }  
    if (!songs.album){
      songs.album = "Unbekannt"
    }
    if (!songs.slength){
      songs.slength = "0:00"
    }

    // console.log(songs);

    this.bs.postAny(songs).subscribe((result)=>{ //Body wird erstellt unf gepostet
      console.log(result); //Ausgabe zur Kontrolle
    })
    this.router.navigateByUrl('/').then(()=>{
      location.reload(); //Seite aktualisieren um Änderung anzuzeigen, aber erst auf die Seite wechsekn
    });
    
  }
  

}

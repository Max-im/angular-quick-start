import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  amount = 8;

  constructor (private http: Http){}

  getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.amount+'&nat=gb')
      .map( response => response.json() )
      .map( response => response.results )
      .map( users => {
        return users.map( u => {
          return {
            name: `${u.name.first} ${u.name.last}`,
            img: u.picture.large,
            geo: u.location.city + ' ' + u.location.state + ' '+ u.location.street 
          }
        })
      })
  }

  setAmount(am) {
    this.amount = am;
  }


}
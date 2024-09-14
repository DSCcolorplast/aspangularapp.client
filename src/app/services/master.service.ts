import { IchecklistGroup } from './../Model/Interface/checklistGroup';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {}

  getapiCall(s:string){
    return this.http.get<any>("https://localhost:7233/api/Angualar/"+s)
  }

}

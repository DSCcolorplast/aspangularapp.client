import { IchecklistGroup } from './../Model/Interface/checklistGroup';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Ivw_ChecklistSubGroupList } from '../Model/Interface/Vw_checklistSubGroup';


@Component({
  selector: 'app-checklist',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  checklistgrouplist:IchecklistGroup []=[];
  vw_ChecklistSubGroupList :Ivw_ChecklistSubGroupList[]=[];
  http = inject(HttpClient);

  ngOnInit(){
    this.loadChecklistGroup();
    this.loadvw_ChecklistSubGroupList();
  }
  loadChecklistGroup(){
    console.log("Working here");
    this.http.get<IchecklistGroup[]>("https://localhost:7233/api/Angualar/ChecklistGroup").subscribe((res:IchecklistGroup[])=>{
      this.checklistgrouplist =res;
    })
  }
  loadvw_ChecklistSubGroupList(){
    this.http.get("https://localhost:7233/api/Angualar/vw_ChecklistSubGroupList").subscribe((res:any)=>{
      this.vw_ChecklistSubGroupList =res;
      console.log(res);
    })
  }
}

import { Component, inject, NgModule, OnInit } from "@angular/core";
import { FirstComponent } from "../UI/First/first.component";
import { IUser } from "../../Models/User";
import { IResource } from "../../Models/Resource";
import { UserService } from "../../Services/user.service";
import { ResourceService } from "../../Services/resource.service";
import { SecondComponent } from "../UI/Second/second.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-main',
    imports: [FirstComponent, SecondComponent, CommonModule],
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  user: IUser[] = []
  resource: IResource[] = []
  
  constructor(
    private userService: UserService,
    private resourceService: ResourceService
  ) { } 
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.user = response.data;
    })
  
    this.resourceService.getResources().subscribe((response) => {
      this.resource = response.data;
    })
  }  
}
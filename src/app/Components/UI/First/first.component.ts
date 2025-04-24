import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IUser } from "../../../Models/User";
import { RouterModule } from "@angular/router";
import { UserService } from "../../../Services/user.service";

@Component (
  {    
    selector: "first-block",
    templateUrl: './first.component.html',
    styleUrl: "./first.component.css",
    imports: [CommonModule, RouterModule]
  }
)
export class FirstComponent implements OnInit {
    @Input() user: IUser
    details = false

    users: IUser[] = []

    constructor(
      private userService: UserService
    ) { } 

    ngOnInit(): void {
      this.loadUsers();
    }

    loadUsers(): void {
      this.userService.getUsers().subscribe(response => {
        this.users = response.data;
      });
    }

    
}
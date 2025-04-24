import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../UI/CardInfo/card.component";
import { IUser } from "../../Models/User";
import { UserService } from "../../Services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component (
  {    
    selector: "app-userInfo",
    templateUrl: './user.component.html',
    imports: [CommonModule, CardComponent]
  }
)
export class UserComponent implements OnInit {
  user: IUser;
  id: number;
  
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe(response => {
      this.user = response.data 
    })
  }

  deleteUser(id: number): void {
    if (confirm('Удалить пользователя?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
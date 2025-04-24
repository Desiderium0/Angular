import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IUser } from "../../../Models/User";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../../Services/user.service";

@Component (
  {    
    selector: "card-block",
    templateUrl: "./card.component.html",
    styleUrl: "./card.component.css",
    imports: [CommonModule, ReactiveFormsModule]
  }
)
export class CardComponent {
  @Input() user: IUser
  @Output() deleteUser = new EventEmitter<number>();

  form = new FormGroup({
    avatar: new FormControl(null),
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    email: new FormControl(null)
  });

  valueForm = this.form.value;

  constructor(private userService: UserService) { }

  handleDelete(): void {
    this.deleteUser.emit(this.user.id);
  }

  onSubmit(): void {
    this.userService.updateUser(this.user.id, this.valueForm).subscribe()
  }
}
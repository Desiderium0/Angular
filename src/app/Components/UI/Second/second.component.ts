import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IResource } from "../../../Models/Resource";


@Component({
    selector: "second-block",
    templateUrl: "./second.component.html",
    styleUrl: "./second.component.css",
    imports: [CommonModule]
})
export class SecondComponent {
  @Input() resource: IResource
}
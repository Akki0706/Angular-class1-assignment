import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [],
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.css'
})
export class MessageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string },public dialogRef : MatDialogRef<MessageDialogComponent>) {}

  onClose():void{
    this.dialogRef.close();
  }
}

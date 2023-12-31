import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter(); // 부모컴포넌트(secion)에 데이터 전달

  executeButton(command: string) {
    this.clickEvent.emit(command); // 부모컴포넌트(secion)에 데이터 전달 - clickEvent라는 이벤트를 통해 전달
  }
}

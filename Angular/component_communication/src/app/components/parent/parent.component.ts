import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string = '';
  parentMessage: string = '';
  parentMessageSubs: string = '';
  childMessageObservable$!: Observable<string>;

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.childMessageObservable$ =
      this.componentsService.childMessageObservable$;
    this.childMessageObservable$.subscribe((msg) => (this.message = msg));
  }
  
  getChildMessageWithOutput(message: string) {
    this.message = message;
  }

  getChildMessageWithService() {
    return this.componentsService.getChildMessageWithService();
  }

  setParentMessageWithInputProperty() {
    this.parentMessage = 'Parent using input property';
  }

  setParentMessageWithService() {
    this.componentsService.setParentMessageWithService('Parent using service');
  }

  setParentMessageWithObservable() {
    this.componentsService.setParentMessage('Parent using observable');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment',
  template: `<fieldset>
  <legend>{{comment.id}} user's email:
   {{comment.email}}</legend>
  <ul>
      <li>{{comment.name}}</li>
      <li>{{comment.body}}</li>
    </ul>
  </fieldset>
  `,
})
export class UserComponent {
  @Input() comment;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  template: `<fieldset>
  <legend>{{user.name}}</legend>
  <ul>
    <li>{{user.email}}</li>
    <li>{{user.phone}}</li>
    <li>{{user.website}}</li>
  </ul>
  </fieldset>
  `,
})
export class UserComponent  {
  @Input() user;

}

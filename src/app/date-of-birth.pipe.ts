import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'dateOfBirth'
})
export class DateOfBirthPipe implements PipeTransform {

  transform(value: number ): number {
    let birthDate: any = new Date(value).getFullYear();
    let currentDate: any = new Date().getFullYear();
    console.log(new Date());
    let age: any;
    age = currentDate - birthDate;
    console.log(age);
    return age;
  }
}

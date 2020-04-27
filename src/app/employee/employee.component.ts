import { Component } from "@angular/core";

@Component({
  selector : 'employee-list',
  templateUrl: 'app/employee/employeeComponent.html',
  styleUrls: ['app/employee/employeeComponent.css']

})
export class employeeComponent{

    employees : any[] = [
      {code: 'e101',name: 'Abdul1',gender: 'Male',salary: 60000,dateOfBirth:'25/06/1985'},
      {code: 'e101',name: 'Abdul1',gender: 'Male',salary: 60000,dateOfBirth:'25/06/1985'},
      {code: 'e101',name: 'Abdul1',gender: 'Male',salary: 60000,dateOfBirth:'25/06/1985'},
      {code: 'e101',name: 'Abdul1',gender: 'Male',salary: 60000,dateOfBirth:'25/06/1985'}
    ];
}
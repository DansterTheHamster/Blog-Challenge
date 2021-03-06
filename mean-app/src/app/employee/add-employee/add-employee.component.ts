import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data!: Object;
  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      salary: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.createForm();
  }


  get f() {
    return this.form.controls;
  }
  insertData() {
    this.submitted=true;

    if(this.form.invalid) {
      return;
    }

    this.employeeService.insertData(this.form.value).subscribe(res => {
      this.data = res;
    });
  }
}

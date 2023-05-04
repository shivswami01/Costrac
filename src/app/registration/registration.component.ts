import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../Services/authservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private auth: AuthserviceService) { }

  initForm(): void {
    this.formGroup = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmpassword: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)
      }
    )
  }
  ngOnInit(): void {
    this.initForm();
  }

  crateNewUser(event: any) {
    debugger;
    this.auth.registerNewUser(this.formGroup.value).subscribe(result=>{
      console.log(result);
      debugger;
      if(result.success){
        alert("User details created successfully.");
      }
      else{
        alert("Please contact to system adminstrator.")
      }
    })
  }

  restFields() {

  }
}

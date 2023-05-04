import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../Services/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthserviceService, public router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    )
  }

  loginProcess(event: any) {
    console.warn("Logging in");
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.success) {
          alert("Logged in successfully..")
          localStorage.setItem("token", result.token);
          localStorage.setItem("userDetails", result.userDetails);
          this.router.navigate(['home']);
        }
        else {
          alert("Failed to Login! Incorrect id or password.");
        }
      });
    }
    else {
      alert("Enter username and password.");
    }
  }

}

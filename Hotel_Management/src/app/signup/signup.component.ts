import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm!: FormGroup;
  name1!: string;
  isMatch: boolean = false;
  showPassword = false;
  showConfirmPassword = false;
  endPoint: any;

  constructor(private formBuilder: FormBuilder,
    public apiCallService: ApicallService,
    private router: Router) { }

  ngOnInit() {
    this.name1 = this.apiCallService.name;
    this.endPoint = this.apiCallService.journey;  //admin,owner,user

    this.formDetails();
  }

  formDetails() {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      mob: [null, [Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      gender: [],
      pan: [],
      password: [],
      confirmPass: ['']
    })
  }

  matchPassword() {
    if (this.signUpForm.value.confirmPass != '') {
      if (this.signUpForm.value.password == this.signUpForm.value.confirmPass) {
        this.isMatch = false;
      }
      else {
        this.isMatch = true;
      }
    }
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }

  showConfirmPass() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submit() {
    this.apiCallService.postApiCall(this.endPoint, this.signUpForm.value).subscribe(respo => {

      if (this.endPoint === 'admin') {
        this.router.navigateByUrl('/admin/adminSuccess')
      }
      else if (this.endPoint === 'owner') {
        this.router.navigateByUrl('/owner/ownerSuccess')
      }
      else {
        this.router.navigateByUrl('/user/userSuccess')
      }
    })

  }
}

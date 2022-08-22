import { ContactType } from './../shared/feddback';

import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Feedback } from '../shared/feddback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;
feedbackForm : FormGroup;
feedback : Feedback;
contactType : ContactType;
  constructor(private fb : FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname : ['', Validators.required ],
      lastname : ['', Validators.required ],
      telnum : [0, Validators.required ],
      email : ['', Validators.required ],
      agree : false,
      Contacttype : 'None',
      message : ''
    });

  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }


}

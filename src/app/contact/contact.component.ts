import { ContactType } from './../shared/feddback';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Feedback } from '../shared/feddback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
      firstname : '',
      lastname : '',
      telnum : 0,
      email : '',
      agree : false,
      Contacttype : 'None',
      message : ''
    });

  }
  

}

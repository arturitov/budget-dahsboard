import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  

  categoryForm: FormGroup;
  collection: any;
  categories: any;

  constructor( public fb: FormBuilder, private afs: AngularFirestore) {
    this.collection = afs.collection<any>('categories');
  }

  ngOnInit(){

    this.categoryForm = new FormGroup({
      name: new FormControl(''),
      budget: new FormControl(0),
      tag: new FormControl(''),
    });

    this.categories = this.collection.valueChanges();
    
  }

  submit(){
    let category = this.categoryForm.value;
    category.total = 0;
    category.monthlyTotal = category.budget;

    this.collection.add(category);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
freshnessList: string[] = ['Brand New', 'Second Hand', 'Refurbished'];
productForm!: FormGroup;

constructor(private formBuilder: FormBuilder){}

addProduct() {
  console.log('AddProduct Button Works!')
}

ngOnInit() {
this.productForm = this.formBuilder.group({
  productName: ['', Validators.required],
  category: ['', Validators.required],
  fresh: ['', Validators.required],
  price: ['', Validators.required],
  comment: ['', Validators.required],
  date: ['', Validators.required]
})
}

}

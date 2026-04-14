import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Userservice } from '../../services/userservice';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    department: new FormControl('',Validators.required),
    salary: new FormControl('',[Validators.required, Validators.min(35000)]),
    status: new FormControl('',Validators.required),
    employetype : new FormControl('', Validators.required),
  })

  constructor(
    private userservice: Userservice, 
    private router:Router,
    private route:ActivatedRoute
  ) {}

  submit(){
    if(this.form.invalid) return;

    const data = this.form.getRawValue();

    // this.userservice.add(this.form.value);
    if(this.index !== null){
      this.userservice.update(this.index,data as any);
    }else{
      this.userservice.add(data as any);
    }
    this.form.reset();
    this.router.navigate(['/']);
  }

  index: number | null = null;

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get("id");

    if(id !== null){
      this.index = Number(id);

      const data = this.userservice.getAll()[this.index];

      this.form.patchValue(data);
      console.log(data)
    }
    
  }
}

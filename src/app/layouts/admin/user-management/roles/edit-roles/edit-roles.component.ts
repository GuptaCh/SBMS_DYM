import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/Services/roles/role.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {

  edit_Role: FormGroup;
  permissions = [];

  constructor(private fb: FormBuilder,
    private roleService: RoleService) { }

  ngOnInit(): void {
  }

  init_role() {
    this.edit_Role = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      aliasName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      permissions: this.fb.array(this.permissions, [Validators.required]),
    })
  }

  sub_copy_role() {
    this.roleService.copy_role.subscribe(val => {
      if (val) {
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
        this.edit_Role.controls['name'].patchValue(val.name)
      }
    })
  }

  getpermissionsFromService() {
    this.roleService.permissionList.subscribe(val => {
      console.log("val", val);
      if (val.length != 0) {
        this.permissions = val;
      }
    });
  }

}

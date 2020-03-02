import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RoleService } from 'src/app/Services/roles/role.service';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Component({
  selector: 'app-edit-permissions',
  templateUrl: './edit-permissions.component.html',
  styleUrls: ['./edit-permissions.component.css']
})
export class EditPermissionsComponent implements OnInit {

  permissionEdit: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder,
    private roleService: RoleService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initData();
    this.subcribe_edit();
  }

  subcribe_edit() {
    this.roleService.edit_Permission_Value.subscribe(val => {
      this.permissionEdit.controls['name'].patchValue(val.name);
      this.permissionEdit.controls['description'].patchValue(val.description);
      this.permissionEdit.controls['createdBy'].patchValue(val.createdBy);
      this.permissionEdit.controls['createdDate'].patchValue(val.createdDate);
      this.permissionEdit.controls['modifiedBy'].patchValue(val.modifiedBy);
      this.permissionEdit.controls['permissionId'].patchValue(val.permissionId);
    })
  }

  initData() {
    this.permissionEdit = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      createdBy: [''],
      createdDate: [''],
      modifiedBy: [''],
      permissionId: [''],
    });
  }

  editPermissions() {
    this.loading = true;
    if (this.permissionEdit.invalid) {
      this.toastr.warning("please fill all mandatory fields");
      this.loading = false;
      return
    }
    this.roleService.editPermissions(this.permissionEdit.value).subscribe(res => {
      this.loading = false;
      this.toastr.success("Successfully edited", "Success");
      $('#editPermissionModal').modal('hide');
    }, err => {this.loading = false; });
  }

}

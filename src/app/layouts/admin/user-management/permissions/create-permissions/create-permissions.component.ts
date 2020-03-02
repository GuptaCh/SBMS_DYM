import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/Services/roles/role.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-permissions',
  templateUrl: './create-permissions.component.html',
  styleUrls: ['./create-permissions.component.css']
})
export class CreatePermissionsComponent implements OnInit {

  loading: boolean;
  permission = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
    description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
  });

  constructor(private fb: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  loadingfalse() {
    this.loading = false;
  }

  createPermissions() {
    this.loading = true;
    if (this.permission.invalid) return
    this.roleService.createPermission(this.permission.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/user-management/permissions/permissions-list']);
    }, err => {
      this.toastr.error(err.error.errorMessage);
    });
    this.loadingfalse();
  }

}

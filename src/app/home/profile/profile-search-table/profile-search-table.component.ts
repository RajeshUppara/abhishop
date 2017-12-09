import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../shared/service/animation.service';
import { ApexService } from './../../../shared/service/apex.service';
import { ProfileService } from './../profile.service';
import { Profile } from '../../../apex/entities/profile';

@Component({
  selector: 'app-profile-search-table',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss']
})
export class ProfileSearchTableComponent implements OnInit {
  dataList: Profile[] = [];
  profile: Profile = new Profile();
  admin: any = [];
  superadmin: any = [];
  user: any = [];
  constructor(private profileService: ProfileService, private apexservice: ApexService) {
    this.search();
  }

  ngOnInit() {
  };

  search() {
    let superUserList: any = [];
    let adminList: any = [];
    let userList: any = [];
    this.profileService.searchProfile({}).subscribe((data: Profile[]) => {
      this.dataList = data;
      console.log(this.dataList);
      this.dataList.forEach((eachObject) => {
        if (eachObject.role.toLowerCase() === 'superadmin') {
          superUserList.push(eachObject);
          console.log(superUserList);
          this.superadmin = superUserList;
        }
      })
      this.dataList.forEach((eachObject) => {
        if (eachObject.role.toLowerCase() === 'admin') {
          adminList.push(eachObject);
          console.log(adminList);
          this.admin = adminList;
        }
      })
      this.dataList.forEach((eachObject) => {
        if (eachObject.role.toLowerCase() === 'user') {
          userList.push(eachObject);
          console.log(userList);
          this.user = userList;
        }
      })
    })
  }
}
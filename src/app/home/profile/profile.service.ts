import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { AppService } from '../../shared/service/app.service';
import { HttpClient } from '@angular/common/http';
import { Storage }from '../../shared/utils/storage';

@Injectable()
export class ProfileService {
  private host = Props.API_END_POINT;
  private url: string = '';
  constructor(private http: HttpClient, private appService: AppService) { 

  }
  getParamId(){
    return this.appService.getParam('id');
  }
  getParamTabName() {
    return this.appService.getParam('tabName');
  }
  getCurrentProfileId(){
    return Storage.getSessionUser().id;
  }
  getProfile(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/profile/"+data;
    return this.http.get(this.url);
  }
  getRoles() {
    this.url = this.host + "/dataload/roles";
    return this.http.get(this.url);
  }
  searchProfile(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/profile/";
    return this.http.post(this.url, {data: data});
  }
  saveProfile(data: any) {
    this.appService.showLoader(true);
    this.url = this.host+"/profile/";
    return this.http.put(this.url, {data: data});
  }
  getBranches() {
    this.appService.showLoader(true);
    this.url = this.host+"/dataload/branchs";
    return this.http.get(this.url);
  }
  navigateProfileEdit(id:any){
         this.appService.navigate(Props.PROFILE_EDIT_PAGE, [{id: id}]);
     }
     navigateProfile(){
       this.appService.navigate('profile/search',[])
     }
}

import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../../shared/service/animation.service';
import { ApexService } from './../../../../shared/service/apex.service';
import { ConsumerForm } from '../../consumer.form';

import { ConsumerService } from './../../consumer.service';

import { Consumer } from '../../../../apex/entities/consumer';
@Component({
  selector: 'app-consumer-edit',
  templateUrl: './consumer-edit.component.html',
  // styleUrls: ['./../consumer.component.scss']
})
export class ConsumerEditComponent implements OnInit {
  consumer: Consumer = new Consumer();
  myForm: any = ConsumerForm.init();
  paramId: any;
  branches:any;
  constructor(private consumerService: ConsumerService, private apexService: ApexService) {
    ConsumerForm.edit(this.myForm);
    // this.getBranchesload();
    this.paramId = this.consumerService.getParamId();
    if(this.paramId != null) {
      this.entity(this.paramId);
    }
   }

  ngOnInit() {
    this.consumer = new Consumer();
  }
  entity(id: string) {
    this.consumerService.getConsumer(id).subscribe((data: Consumer) => {
      this.consumer = data;
    })
  }
  saveEntity() {
    this.consumerService.saveConsumer(this.consumer).subscribe( (data) => {
      console.log(data);
      this.consumerService.navigateConsumer();
      // this.apexService.showMessage(data.message);
    });
  }
  back(){
    this.consumerService.navigateConsumer();

  }
  // getBranchesload() {
  //   this.consumerService.getBranches().subscribe( (data) => {
  //     this.branches = data;
  //     console.log(data);
  //   });
    // init() {

    //   this.auth = new User();
    // }
}

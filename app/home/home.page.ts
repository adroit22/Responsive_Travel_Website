import { Component, SystemJsNgModuleLoader} from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  firstName: string = '';
  lastName: string = '';
  myPictures;

  slideOptions = {
    initialSlide: 0,
    speed: 600,
    loop: true,
  };

  
  constructor(public modalController: ModalController) { 
  }

  ngOnInit() {
    this.myPictures = [
      { "image": "./assets/img/mal7.jpg", "name": "backimg7" },
      { "image": "./assets/img/mal1.jpg", "name": "backimg1" },      
      { "image": "./assets/img/mal6.jpg", "name": "backimg6" },
      { "image": "./assets/img/mal9.jpg", "name": "backimg9" },
      { "image": "./assets/img/mal2.jpg", "name": "backimg2" },
      { "image": "./assets/img/mal3.jpg", "name": "backimg3" },
      { "image": "./assets/img/mal4.jpg", "name": "backimg4" },
      { "image": "./assets/img/mal5.jpg", "name": "backimg5" },      
      { "image": "./assets/img/mal8.jpg", "name": "backimg8" },
    
    ];
  }
  
    slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


  async openModal() {
    const mod = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        firstName: this.firstName,
        lastName: this.lastName
      }
    });
    return await mod.present();
  }

 

}
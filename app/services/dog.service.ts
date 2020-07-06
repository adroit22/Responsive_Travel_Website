import { Injectable } from '@angular/core';
import { IonItem } from '@ionic/angular';

import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  
  constructor(private http: HttpClient) { }
}



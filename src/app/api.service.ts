import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: Http) {}

  public loginProvider(values) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL+'/api/product',values).subscribe(
        data=>{
          resolve(data)
        },err =>{
          reject(err) 
        })
      })
    }
  }

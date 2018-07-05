import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  header :HttpHeaders

  constructor( private http: HttpClient) {

  }

  createHeader () {
    let header = new HttpHeaders();
         header = header.append('Content-Type','application/json');
         header = header.append("Access-Control-Allow-Origin", "*");
         header = header.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
         header = header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
        return header
        }

  public loginProvider(values, localUrl) {
      return new Promise((resolve, reject) => {
      this.http.post(API_URL+localUrl, values, {headers: this.header, params : values}).subscribe(
        data=>{
          resolve(data)
        },err =>{
          reject(err) 
        })
      })
    }
  }

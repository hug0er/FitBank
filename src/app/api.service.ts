import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor( private http: HttpClient) {

  }
  createHeader () {
    var header = new HttpHeaders();
         header = header.set('Content-Type','application/json');
         header = header.set("Access-Control-Allow-Origin", "*");
         header = header.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
         console.log(header);
        return header
        }

  createToken(token){
    
    let header = this.createHeader();
    console.log(token);
    header = header.set('Authorization','Bearer ' + token);
    console.log(header);
    return header;
  }

  public loginProvider(values, localUrl) {
      return new Promise((resolve, reject) => {
      this.http.post(API_URL+localUrl, values, {headers: this.createHeader(), params : values}).subscribe(
        data=>{
          resolve(data)
        },err =>{
          reject(err) 
        })
      })
    }
    public postProvider(localUrl, token, value) {
      return new Promise((resolve, reject) => {
      this.http.post(API_URL+localUrl, value, {headers: this.createToken(token), params : value}).subscribe(
        data=>{
          resolve(data)
        },err =>{
          reject(err) 
        })
      })
    }

  // public getProvider(localUrl, token, value) {
  //   return new Promise((resolve, reject) => {
  //   this.http.get(API_URL+localUrl, {headers: this.createToken(token)}).subscribe(
  //     data=>{
  //       resolve(data)
  //     },err =>{
  //       reject(err) 
  //     })
  //   })
  // }
  
  // public putProvider(localUrl, token) {
  //   return new Promise((resolve, reject) => {
  //   this.http.put(API_URL+localUrl, {headers: this.createToken(token)}).subscribe(
  //     data=>{
  //       resolve(data)
  //     },err =>{
  //       reject(err) 
  //     })
  //   })
  // }   
}

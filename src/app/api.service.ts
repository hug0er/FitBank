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

  createToken(token){
    let header = this.createHeader().append('Authorization','Bearer ' + token);
    return header;
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
    public postProvider(localUrl, token) {
      return new Promise((resolve, reject) => {
      this.http.get(API_URL+localUrl, {headers: this.createToken(token)}).subscribe(
        data=>{
          resolve(data)
        },err =>{
          reject(err) 
        })
      })
    }

  public getProvider(localUrl, token, value) {
    return new Promise((resolve, reject) => {
    this.http.get(API_URL+localUrl, {headers: this.createToken(token)}).subscribe(
      data=>{
        resolve(data)
      },err =>{
        reject(err) 
      })
    })
  }
  
  public putProvider(localUrl, token) {
    return new Promise((resolve, reject) => {
    this.http.put(API_URL+localUrl, {headers: this.createToken(token)}).subscribe(
      data=>{
        resolve(data)
      },err =>{
        reject(err) 
      })
    })
  }   
}

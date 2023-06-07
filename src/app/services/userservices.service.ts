import { Injectable, OnInit } from '@angular/core';
import {HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http'
//metodo HTTPCLIENT
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private ApiUrl = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  login(email:string,password:string ):void{
    const loginUrl = `${this.ApiUrl}/login`
    const formData = {//capturar datos que vamos a enviar
      email: email,
      password:password

    }
    this.http.post(loginUrl,formData,{headers:this.getAuthHeaders()}).subscribe(
      (response:any)=>{
      localStorage.setItem("token",response.token)
        console.log('respuesta :',response);

      },
      (error)=>{
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log("error",error.error.message);
          }
        }else{
          console.error(`codigo de error ${error.status} ` + `mensaje:${error.error}`);
        }
      }
    )
  }

  create(username:string,email:string,password:string):void{
    const createUrl =`${this.ApiUrl}/create`
     const fromData ={
      username:username,
      email:email,
      password:password
     }
     this.http.post(createUrl,fromData).subscribe(
      (response:any)=>{
        console.log('respuesta :',response);
      },
      (error)=>{
         console.log("error",error);
         
      }
     )
  }
  private getAuthHeaders():HttpHeaders{
   const authToken = localStorage.getItem('token')// consigue el item de tal cosa y lo mande al localstorage
   const headers = new HttpHeaders({'Authorization':`Bearer ${authToken}`}); //formar el valor del encabezado que le vamos a pasar a la api =standar de http (tema de autentificacion)
   return headers;
  }
 
}

//libreira que se encarga de hacer peticiones =rxjs
//observables ,suscribe 

//instanciar lalibreria laclase , injectando esa idependia =para comprobar si es una intancia en una clase
// que tipo de error esta en la solicitud del cliente

// acotar el tema de modificacion de la pagina =jwt
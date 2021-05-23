import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

// const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private _loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // add the jwt token from localstorage 
        let authReq = req;
        const token = this._loginService.getToken();
        if(token!=null)
        {
            authReq = authReq.clone({setHeaders:{Authorization : `Bearer ${token}`}})
        }
        return next.handle(authReq)
    }

}

export const authInterceptorProvider = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true,
    },
];
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class Kinvey {
    private BASE_URL = 'https://baas.kinvey.com/';
    private APP_KEY = 'kid_Hkz9lEbQQ'; // APP KEY HERE
    private APP_SECRET = '244794ec8518405bb3ec66c51333c5bd';

    constructor(private http: HttpClient) { }

    
    public get(module, endpoint, auth): Observable<Object> {
        return this.requester(module, endpoint, auth, 'GET', null);
    }

    public post(module, endpoint, auth, data): Observable<Object> {
        return this.requester(module, endpoint, auth, 'POST', data);
    }

    public update(module, endpoint, auth, data): Observable<Object> {
        return this.requester(module, endpoint, auth, 'PUT', data);
    }

    public delete(module, endpoint, auth): Observable<Object> {
        return this.requester(module, endpoint, auth, 'DELETE', null);

    }
    private kinveyHeader(auth): string {
        if (auth === 'basic') {
            return `Basic ${btoa(this.APP_KEY + ":" + this.APP_SECRET)}`;
        } else {
            return `Kinvey ${sessionStorage.getItem('authtoken')}`
        }
    }
    
    private getUrl(module, endpoint): string {
        return this.BASE_URL + module + '/' + this.APP_KEY + '/' + endpoint
    }
    private getHttpHeaders(auth: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': this.kinveyHeader(auth)
        })
    }
    private requester(module, endpoint, auth, method, data) {
        var url = this.getUrl(module, endpoint);
        var headers = {
            headers: this.getHttpHeaders(auth)
        };

        if (method == 'GET') {
            return this.http.get(url, headers);
        } else if (method == 'POST') {
            return this.http.post(url, headers, data);
        } else if (method == 'PUT') {
            return this.http.put(url, headers, data);
        } else if (method == 'DELETE') {
            return this.http.delete(url, headers);
        }
    }
}
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Coach} from './coach';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CoachesCoachdirService {
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://testing.elearnclass.org:4200/api/coaches';
    }

    getCoaches(): Observable<Coach[]> {
        const coaches$ = this.http
                             .get(this.baseUrl)
                             .map(res => <Coach[]>res.json());
        return coaches$;
    }


}

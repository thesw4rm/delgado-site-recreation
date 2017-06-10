import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Coach} from "./coach";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class CoachesCoachdirService {
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'https://api.elearnclass.org/api/coaches-sheet';
    }

    getCoaches(): Observable<Coach[]> {
        return this.http
                   .get(this.baseUrl)
                   .map(res => <Coach[]>res.json());
    }


}

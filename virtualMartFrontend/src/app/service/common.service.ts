import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ResponseWrapper} from '../model/response-wrapper';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommonService<T> {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  public httpPost(
    parameters: any,
    url: string
  ): Observable<ResponseWrapper<T>> {
    return this.http
      .post<ResponseWrapper<T>>(
        environment.backendUrl + url,
        parameters,
        {
          headers: this.headers
        }
      )
      .catch(this.handleErrorsObs);
  }

  public httpPostWithParams(
    parameters: any,
    url: string,
    httpParams: HttpParams
  ): Observable<ResponseWrapper<T>> {
    return this.http
      .post<ResponseWrapper<T>>(
        environment.backendUrl + url,
        parameters,
        {
          headers: this.headers,
          params: httpParams
        }
      )
      .catch(this.handleErrorsObs);
  }

  public httpGet(url: string): Observable<ResponseWrapper<T>> {
    return this.http
      .get<ResponseWrapper<T>>(environment.backendUrl + url, {
        headers: this.headers
      })
      .catch(this.handleErrorsObs);
  }

  public httpGetWithParams(
    url: string,
    httpParams: HttpParams
  ): Observable<ResponseWrapper<T>> {
    return this.http
      .get<ResponseWrapper<T>>(
        environment.backendUrl + url,
        {
          headers: this.headers,
          params: httpParams
        }
      )
      .catch(this.handleErrorsObs);
  }

  public httpDelete(url: string): Observable<ResponseWrapper<T>> {
    return this.http
      .delete<ResponseWrapper<T>>(environment.backendUrl + url, {
        headers: this.headers
      })
      .catch(this.handleErrorsObs);
  }

  private handleErrorsObs(error: any) {
    return throwError(error);
  }
}

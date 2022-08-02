import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PowerBiService {

  url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getReport(){
    const body = {
      client_id: '46e9814f-b418-453a-a8c8-7bebb9036b92',
      resource: 'https://analysis.windows.net/powerbi/api',
      username: 'desarrollador.its4@metgroupsas.com',
      password: '*Dits.2022',
      groupId: 'f9878e89-32bf-48a0-ab63-8c63bb73284f',
      reportId: '6cae223a-89de-45f2-ac9d-a16aadf37344',
      accessLevel: 'View'
    }
    return this.http.post<any>(`${this.url}/getToken`, body).pipe(
      map(resp => {
        return resp.message;
      })
    );
  }
}

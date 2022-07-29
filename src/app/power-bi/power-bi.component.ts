import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBiComponent implements OnInit {
  @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;

  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  };

  id = 'cf392880-0eb7-45a3-b217-bbd48f19daa0';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYmMwYzBlYTAtOWRmZi00MDg1LWJlODgtMGNmMGFhNzkxNDFlLyIsImlhdCI6MTY1OTA0OTI1MiwibmJmIjoxNjU5MDQ5MjUyLCJleHAiOjE2NTkwNTQ4NTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWUVoajJhcnR5ejZKczEwZzJTRXFYaUw5Z2NmMGhGZmI3UVV1L1ZqTWRNenA5VGNBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjRjNTU1MDU2LTMzNmYtNDYzMC1hZGMwLWQ4OThhZTAxYjU5OSIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUnVpeiBVcnJlYSIsImdpdmVuX25hbWUiOiJPc2NhciBEYW5pZWwiLCJpcGFkZHIiOiIxODEuNDkuMjAxLjg4IiwibmFtZSI6Ik9zY2FyIERhbmllbCBSdWl6IFVycmVhIiwib2lkIjoiMGIwZWUyMmEtZmIyNS00YjQxLWEwMWEtNTM0NWM4NTQ2MjZjIiwicHVpZCI6IjEwMDMyMDAyMDQ3MUE4NzciLCJyaCI6IjAuQVNZQW9BNE12UC1kaFVDLWlBendxbmtVSGdrQUFBQUFBQUFBd0FBQUFBQUFBQUFtQUZzLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkV3JpdGUuQWxsIERhdGFzZXQuUmVhZC5BbGwgRGF0YXNldC5SZWFkV3JpdGUuQWxsIEdhdGV3YXkuUmVhZC5BbGwgR2F0ZXdheS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6IkRoMmJEYkpLTVlMV08zNVdRNy13MjNESW9ESTZFcms3SzZoV3FIb2ozRGciLCJ0aWQiOiJiYzBjMGVhMC05ZGZmLTQwODUtYmU4OC0wY2YwYWE3OTE0MWUiLCJ1bmlxdWVfbmFtZSI6ImRlc2Fycm9sbGFkb3IuaXRzNEBtZXRncm91cHNhcy5jb20iLCJ1cG4iOiJkZXNhcnJvbGxhZG9yLml0czRAbWV0Z3JvdXBzYXMuY29tIiwidXRpIjoiNks2UjV5ZDJWMHVLaUwyeW9KOExBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.FZuPVYJvNhfGXP28IwKQQBez6_PcnIUVZ8CWA1ci8bgRLtGeaiQCL82cFZCVHqmVJbjdSS_6B1nmEnLRrdJv5Wfxh3ZdQn4RyRmXha2U2uEiM7GtgTMIvaP1tQGEpkDfLMbWJxyWBots3sCL27-5c-kd12oeBzXaHhWqTP0zqFgy9jNwl2_VEWX-M97j4Gf2y_IO2Dsm5cy904p_M5W958D-tRkRbwp83LF36Lawqfpw3EE2o1m6PVI2MOtbfUYVS-mh-Mtt0Orn6zqgDcH55X608zjmQRMB0klHGwW1QEEBxD6Xl0t9V2Qm76-ZhK2z_1FbN9PcyETGlsAR8NqHkA';
  embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=cf392880-0eb7-45a3-b217-bbd48f19daa0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d';



  constructor() { }

  ngOnInit(): void {
    this.reportConfig = {
      ...this.reportConfig,
      id: this.id,
      embedUrl: this.embedUrl,
      accessToken: this.token,
    }
  }
}
export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}


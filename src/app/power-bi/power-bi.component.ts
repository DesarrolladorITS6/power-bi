import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBiComponent implements OnInit {
  report: any;
  embedConfig!: IBootstrapEmbedConfiguration;
  // embedConfig= {
  //   type: "report",
  //   id: 'c8bb1584-db4d-45bb-b70b-defcdea0a725',
  //   embedUrl: 'https://app.powerbi.com/groups/me/datasets/7b3eadf6-3698-45ca-b957-1f38991e8be6',
  //   accessToken: 'eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9',
  //   tokenType: 'models.TokenType.Embed',
  //   hostname: "https://app.powerbi.com"
  // }

  constructor() { }
  // @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;

  // ngAfterViewInit(): void {
  //   this.report = this.reportObj.getReport();
  // }

  ngOnInit(): void {
    // this.embedConfig= {
    //   type: "report",
    //   id: 'c8bb1584-db4d-45bb-b70b-defcdea0a725',
    //   embedUrl: 'https://app.powerbi.com/groups/me/datasets/7b3eadf6-3698-45ca-b957-1f38991e8be6',
    //   accessToken: 'eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9',
    //   tokenType: 'models.TokenType.Embed',
    //   hostname: "https://app.powerbi.com"
    // }
    this.embedConfig= {
      type: "report",
      embedUrl: 'https://app.powerbi.com/groups/me/datasets/7b3eadf6-3698-45ca-b957-1f38991e8be6',
      hostname: "https://app.powerbi.com",
      settings: {
        layoutType: 'models.LayoutType.MobilePortrait'
      }
    }
  }



}
interface IBootstrapEmbedConfiguration {
  type: string;
  hostname?: string;
  embedUrl?: string;
  settings?: ISettings;
}

interface ISettings {
  layoutType?: any
}

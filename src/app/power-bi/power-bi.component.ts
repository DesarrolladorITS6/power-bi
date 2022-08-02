import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { PowerBiService } from '../services/power-bi.service';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBiComponent implements OnInit {
  @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;

  reportConfig: IReportEmbedConfiguration = {
    type: "report",
    id: undefined,
    embedUrl: undefined,
    accessToken: undefined,
    tokenType: models.TokenType.Embed,
    hostname: "https://app.powerbi.com",
    settings: {
      layoutType: models.LayoutType.Custom,
      customLayout: {
        displayOption: models.DisplayOption.FitToWidth
      }
    }
  };

  reportClass = 'report-container'

  id = '6cae223a-89de-45f2-ac9d-a16aadf37344';
  embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=6cae223a-89de-45f2-ac9d-a16aadf37344&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d';



  constructor(private PowerBiservice: PowerBiService) { }

  ngOnInit(): void {
    this.PowerBiservice.getReport().subscribe(token => {
      this.reportConfig = {
        type: 'report',
        id: this.id,
        embedUrl: this.embedUrl,
        tokenType: models.TokenType.Embed,
        accessToken: token,
        hostname: "https://app.powerbi.com"
      }

    });

  }
}
export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}


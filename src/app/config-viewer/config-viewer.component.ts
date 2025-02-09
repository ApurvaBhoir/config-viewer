import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ConfigViewerComponent implements OnInit {
  configData: any;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe(data => {
      this.configData = data;
    });
  }

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object';
  }

  objectToKeyValue(obj: any): Array<{key: string, value: any}> {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }
}

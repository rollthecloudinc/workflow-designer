import { Component, OnInit } from '@angular/core';
import { ContentPluginManager } from '@rollthecloudinc/content';

@Component({
    selector: 'mfe1-download',
    template: `
        <div class="task">
            <!-- <img src="https://d16ooy9q113vw2.cloudfront.net/assets/download.png"> -->
            <img src="https://d8em0358gicmm.cloudfront.net/assets/download.png">
            <p>Download</p>
        </div>
    `
})

export class DownloadComponent implements OnInit {
    constructor(
        private cpm: ContentPluginManager
    ) { 
        console.log('download component constructor');
    }

    ngOnInit() { }
}
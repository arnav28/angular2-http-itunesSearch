import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ItunesSearchService } from './search.service';
import {TruncateString} from './search.pipe';

@Component({
    moduleId: module.id,
    selector: "search",
    pipes: [TruncateString],
    templateUrl: 'search.component.html',
    styleUrls: ['search.style.css']
})

export class Search{
    items: Array<Object>;
    message: String;

    constructor(private itunesService: ItunesSearchService){
    }
    // Initiate search based on input value
    initSearch(value){
            this.itunesService.getResults(value).then(result => {
                 // Clear previous items
                 this.items = null;
                 this.message = null;
                if(result.results.length > 0){
                    this.items = result.results; 
                } else{
                    this.message = "No results for \"" + value + "\"";
                }      
            
        }); 
    }
}

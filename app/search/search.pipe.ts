import { Pipe } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncateString {
    transform(value) {
        // Set the limit for the app title
        let limit = 30;
        if(value.length < limit){
            return value;
        }
        return value.substring(0, limit) + '...';
    }
}
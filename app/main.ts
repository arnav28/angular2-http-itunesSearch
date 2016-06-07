import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { JSONP_PROVIDERS } from '@angular/http';
import { ItunesSearchService } from './search/search.service';

bootstrap(AppComponent, [ItunesSearchService, JSONP_PROVIDERS]);

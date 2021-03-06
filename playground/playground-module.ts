import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GenticsUICoreModule, OverlayHostService} from "gentics-ui-core";

import {GenticsUIImageEditorModule} from '../dist/index.js';
import {PlaygroundAppComponent} from "./playground.component";

declare const require: any;
require('./styles.scss');

@NgModule({
    bootstrap: [PlaygroundAppComponent],
    declarations: [PlaygroundAppComponent],
    imports: [BrowserModule, FormsModule, GenticsUIImageEditorModule, GenticsUICoreModule],
    providers: [OverlayHostService]
})
export class PlaygroundModule {}
 
import {NgModule} from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { heroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        heroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class heroesModule{

}
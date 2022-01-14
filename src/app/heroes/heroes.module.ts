import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";  
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//las declaraciones de los modulos seran los componentes que tiene la app



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent

    ],

    exports: [
        ListadoComponent
    ],
    imports: [//significa que adentro van modulos
        CommonModule //se usara para cuando utilicemos directivas personalizadas de angular como: *NgIf y *ngFor

    ]
})
export class HeroesModule{

}
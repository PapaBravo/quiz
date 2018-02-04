import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: 'game' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}

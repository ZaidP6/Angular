import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { ElectionComponent } from './components/election/election.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-election', component: ElectionComponent },
  { path: 'pokemon-battle', component: PokemonBattleComponent },
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'item', component: ItemListComponent },
  { path: 'games', component: GameListComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'version/:id', component: GameDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

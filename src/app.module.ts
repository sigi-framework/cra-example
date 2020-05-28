import { Module, EffectModule, ImmerReducer, Effect } from '@sigi/core'
import { Observable } from 'rxjs'
import { tap, map } from 'rxjs/operators'

import { Service } from './app.service'

interface State {
  count: number
}

@Module('Test')
export class AppModule extends EffectModule<State> {
  defaultState = { count: 0 }
  constructor(private readonly svc: Service) {
    super()
  }

  @ImmerReducer()
  add(state: State) {
    state.count += 1
  }

  @Effect()
  do(payload$: Observable<void>) {
    return payload$.pipe(
      tap(() => this.svc.do()),
      map(() => this.getActions().add())
    )
  }
}

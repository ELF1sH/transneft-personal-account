import { action, makeObservable, observable } from 'mobx';

export class DrawerSidebarViewModel {
  @observable public isOpen = false;

  public constructor() {
    makeObservable(this);
  }

  @action public open = () => {
    this.isOpen = true;
  };

  @action public close = () => {
    this.isOpen = false;
  };
}

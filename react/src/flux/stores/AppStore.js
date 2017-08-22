import alt from '../alt';

class AppStore {
  constructor() {
    this.completedWizard = false;
  }

  onCompleteWizard() {
    this.completedWizard = true;
  }
}
export default alt.createStore(AppStore, 'AppStore');

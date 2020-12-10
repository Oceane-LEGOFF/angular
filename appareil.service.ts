export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'eteint',
    },
    {
      name: 'télévision',
      status: 'allumé',
    },
    {
      name: 'Ordinateur',
      status: 'eteint',
    }
  ];

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

}

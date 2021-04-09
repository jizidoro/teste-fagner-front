import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LIST_FADE_ANIMATION } from '../../utils/list.animation';

@Component({
  selector: 'app-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION],
})
export class ToolbarNotificationsComponent implements OnInit {
  isOpen!: boolean;
  notifications!: any[];
  demoTriggers = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        name: 'Exemplo de Notificação',
        time: 'alguns segundos atrás',
        read: false,
        colorClass: '',
      },
      {
        icon: 'shopping_basket',
        name: 'Melhore sua tela inicial',
        time: '23 minutos atrás',
        read: false,
        colorClass: 'primary',
      },
      {
        icon: 'eject',
        name: 'Erro de Importação',
        time: 'uma hora atrás',
        read: false,
        colorClass: 'accent',
      },
      {
        icon: 'cached',
        name: 'Novo módulo disponível',
        time: '6 horas atrás',
        read: true,
        colorClass: '',
      },
      {
        icon: 'code',
        name: 'Atualização do sistema',
        time: 'ontem',
        read: true,
        colorClass: '',
      },
    ];
  }

  markAsRead(notification: any) {
    notification.read = true;
  }

  dismiss(notification: any, event: any) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
    this.triggerDemoNotification();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.triggerDemoNotification();
  }

  onClickOutside() {
    this.isOpen = false;
  }

  triggerDemoNotification() {
    if (this.demoTriggers === 0) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'cached',
          name: 'Novo módulo disponível',
          time: moment().fromNow(),
          read: false,
          colorClass: '',
        });

        this.cd.markForCheck();
      }, 2000);
    } else if (this.demoTriggers === 1) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'shopping_basket',
          name: 'User bought your template',
          time: '23 min ago',
          read: false,
          colorClass: 'primary',
        });

        this.cd.markForCheck();
      }, 2000);
    }
  }
}

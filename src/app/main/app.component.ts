import { Component, OnInit } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFlag,
  faUser as regularUser,
  faBadgeDollar,
  faBoxFull,
  faTicketAlt,
  faTimesCircle,
  faSearch,
  faChartBar
} from '@fortawesome/pro-regular-svg-icons';
import {
  faAdjust,
  faBatteryQuarter,
  faBell,
  faCircle,
  faCoffee,
  faEllipsisH,
  faFighterJet,
  faFlag as solidFlag,
  faMagic,
  faMobile,
  faSquare,
  faSync,
  faTimes,
  faUser,
  faTh,
  faPlus,
  faBoxes,
  faDatabase,
  faUsers,
  faBuilding,
  faUserTie,
  faUserPlus,
  faTags,
  faHouseUser,
  faCog,
  faFileAlt,
  faFileSignature,
  faEye,
  faHome,
  faUserHeadset,
  faFileUpload,
  faAngleDown,
  faEdit,
  faHistory,
  faFileCheck,
  faFileSearch,
  faFileTimes,
  faFileEdit
} from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faTh = faTh;
  faPlus = faPlus;
  faFileAlt = faFileAlt;
  faBoxes = faBoxes;
  faDatabase = faDatabase;
  faUsers = faUsers;
  faBuilding = faBuilding;
  faUserTie = faUserTie;
  faUserPlus = faUserPlus;
  faTags = faTags;
  faHouseUser = faHouseUser;
  faCog = faCog;
  faBell = faBell;
  faSync = faSync;
  faFlag = faFlag;
  solidFlag = solidFlag;
  faTimes = faTimes;
  faMagic = faMagic;
  faAdjust = faAdjust;
  faCircle = faCircle;
  faCoffee = faCoffee;
  faSquare = faSquare;
  faMobile = faMobile;
  regularUser = regularUser;
  faEllipsisH = faEllipsisH;
  faFighterJet = faFighterJet;
  faBatteryQuarter = faBatteryQuarter;
  faFileSignature = faFileSignature;
  faEye = faEye;
  faBadgeDollar = faBadgeDollar;
  faBoxFull = faBoxFull;
  faTicketAlt = faTicketAlt;
  faTimesCircle = faTimesCircle;
  faHome = faHome;
  faSearch = faSearch;
  faUserHeadset = faUserHeadset;
  faFileUpload = faFileUpload;
  faChartBar = faChartBar;
  faAngleDown = faAngleDown;
  faEdit = faEdit;
  faHistory = faHistory;
  faFileCheck = faFileCheck;
  faFileSearch = faFileSearch;
  faFileTimes = faFileTimes;
  faFileEdit = faFileEdit;

  notificationsCounter = 1000;
  isSyncAnimated = true;
  magicLevel = 0;

  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(
      faTh,
      faFileAlt,
      faPlus,
      faBoxes,
      faDatabase,
      faUsers,
      faBuilding,
      faUserTie,
      faUserPlus,
      faTags,
      faHouseUser,
      faCog,
      faBell,
      faSync,
      faFlag,
      solidFlag,
      faTimes,
      faMagic,
      faAdjust,
      faCircle,
      faCoffee,
      faSquare,
      faMobile,
      regularUser,
      faEllipsisH,
      faFighterJet,
      faBatteryQuarter,
      faFileSignature,
      faEye,
      faBadgeDollar,
      faBoxFull,
      faTicketAlt,
      faTimesCircle,
      faHome,
      faSearch,
      faUserHeadset,
      faFileUpload,
      faChartBar,
      faAngleDown,
      faEdit,
      faHistory,
      faFileCheck,
      faFileSearch,
      faFileTimes,
      faFileEdit
    );
    faConfig.fallbackIcon = faMagic;
  }

  isIframe = false;

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
  }
}

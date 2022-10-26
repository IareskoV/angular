import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';

  translationUAobject = {

    header:{
      logo1:"monobank",
      logo2:"Universal bank",
      mainLinks:{
        l1:"Full page",
        l2:"blue",
        l3:"footer",
        l4:"Укр",
        l5:"Eng"
      },
      additionalLinks:{
        l1:"footer component",
        l2:"ФОП",
        l3:"Депозити",
        l4:"облігації",
        l5:"Покупка частинами",
        l6:"Міжнародні перекази",
      }
    },
    main:{
      header:"Ми знову прибрали все зайве, щоб ви отримали кращий досвід.",
      text:"      Залиште номер телефону, і ми надішлемо посилання на додаток, де можна відкрити рахунок ФОП",
      button:"Хочу рахунок ФОП",
    },
    cabinet:{
      header:"Бухгалтерський кабінет",
      text2:"Можна додати до двох додаткових номерiв телефону для роботи у веб-кабінеті.",
      button:"Увійти в кабінет",
      text1:"Окремий бухгалтерський кабінет для керування рахунком ФОП."
    },
    openCount:{
      header:"Як відкрити рахунок ФОП",
       first:{
        text:"Пройти швидку реєстрацію в додатку monobank та отримати картку"
       },
       second:{
        text:"Бути зареєстрованим як фізична особа-підприємець"
       },
       third:{
        text:"Відкрити рахунок ФОП у додатку monobank в 1 торкання"
       }
    },
    youWaiting:{
      header:"Ви так довго цього чекали",
      first:{
        text1:"Повністю дистанційне обслуговування: не потрібно відвідувати точку видачі або звертатися до відділення",
        text2:"",

       },
       second:{
        text1:"Керування всіма рахунками monobank в одному додатку",
        text2:"Один додаток для ФОП і особистого рахунку",
       },
       third:{
        text1:"Платежі з валютних рахунків 24/7/365, а не тільки з 10:00 до 15:00",
        text2:"Не потрібно чекати поки відкриється міжбанк, щоб продати валюту. Валютообмін 24/7",
       },
       fourth:{
        text1:"Окремий бухгалтерський веб-кабінет . Можна додати до двох додаткових номерiв телефону для роботи у веб-кабінеті з рахунком ФОП",
        text2:"",
       },
       fifth:{
        text1:"Вигідний курс обміну валют",
        text2:"",
       },
       sixth:{
        text1:"Дружній фінансовий моніторинг і валютний контроль",
        text2:"",
       }
    },
    tarifs:{
      header:"Тарифи",
      tabble:{
        headersRow:{
          header2:{
            first:"monobank",
            second:"Universal Bank",
          },
          header3:{
            first:"Банк 1",
          },
          header4:{
            first:"Банк 2",
          },
          header5:{
            first:"Банк 3",
          }
        },
        row1:{
         header:"Вартість відкриття рахунку",
         colum2:"0 грн",
         colum3:"0 грн онлайн",
         colum4:"1 грн",
         colum5:"50 грн",
        },
        row2:{
          header:"Вартість обслуговування рахунку на місяць",
          colum2:"0 грн",
          colum3:"125 грн",
          colum4:"100 грн",
          colum5:"129 грн",
         },
         row3:{
          header:"Комісія за переказ на рахунки інших банків",
          colum2:"0 грн",
          colum3:"3 грн",
          colum4:"3 грн",
          colum5:"2 грн",
         },


      },
      text:"Станом на 26 червня 2020 р.",
      link:"Детальні тарифи"
    },
    card:{
      header:"Немає картки monobank?",
      text1:" Не страшно, її можна отримати просто зараз",
      button:"Отримати картку",
      text2:"Відкриття картки ні до чого не зобов'язує. Крім рахунка ФОП у нас дуже багато",
      link:"крутих пропозицій",
    },
    footer:{

    }

  }
  constructor(public authService:AuthService,private router:Router){}
  user$ = this.authService.currentUser$;
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate([''])
    })
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    main();
    setInterval(main, 1000);
  }

}

function main(){
  // get current date
  var t1 = new Date()
  // get date/time school Ends
  // 5/16/19
  var t2 = new Date(2019, 5, 16, 0, 0, 0, 0);
  // find differance
  var dif = t1.getTime() - t2.getTime();
  var Seconds_from_T1_to_T2 = dif / 1000;
  var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
  Seconds_Between_Dates = Math.floor(Seconds_Between_Dates)
  var theDiv2 = document.getElementById("numSeconds");
  theDiv2.innerHTML = Seconds_Between_Dates + " Seconds";

  var minBetweenDates = Math.floor(Seconds_Between_Dates / 60)
  var theDiv3 = document.getElementById("numMins");
  theDiv3.innerHTML = minBetweenDates + " Minutes";

  var HoursBetweenDates = Math.floor(minBetweenDates / 60)
  var theDiv4 = document.getElementById("numHours");
  theDiv4.innerHTML = HoursBetweenDates + " Hours";



  var daysBetweenDates = Seconds_Between_Dates / 86400
  daysBetweenDates = Math.floor(daysBetweenDates);
  var theDiv = document.getElementById("numDays");
  theDiv.innerHTML = daysBetweenDates + " Days";

  // update number
}

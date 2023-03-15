import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  chosenColor: boolean = false;
  crewFull: boolean = false;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', select: false},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', select: false},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', select: false},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', select: false},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', select: false},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', select: false},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', select: false}
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate: object){
    let inCrew = this.crew.includes(candidate);
    if(!inCrew && this.crew.length<3){
      this.crew.push(candidate);
    }
    candidate["select"] =true;
    if(this.crew.length === 3){
      this.crewFull = true;
      candidate["select"] = false;
    }
  }
  // Code the 'addCrewMember' function here:

}

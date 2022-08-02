import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employeeDetails } from './modules/employee-table/employee-table.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {




  ELEMENT_DATA: employeeDetails[] = [
    {position: 1,  empID: 101, name:"Donald",   gender:"Male",    dob:"12/09/1989", department:"Analyst",     yr_of_joining:2012, email:"abbott.rodger@grant.net",       contact:7111136008, image:"assets/images/104.png"},
    {position: 2,  empID: 102, name:"Douglas",  gender:"Male",    dob:"05/07/1990", department:"Analyst",     yr_of_joining:2018, email:"mittie22@eichmann.info",        contact:6127930385, image:"assets/images/102.png"},
    {position: 3,  empID: 103, name:"Jennifer", gender:"Female",  dob:"11/06/1999", department:"Developer",   yr_of_joining:2013, email:"ernest.hoppe@yahoo.com",        contact:8708353526, image:"assets/images/103.png"},
    {position: 4,  empID: 104, name:"Michael",  gender:"Male",    dob:"01/04/1995", department:"Developer",   yr_of_joining:2012, email:"vjohnson@emard.biz",            contact:7447864993, image:"assets/images/101.png"},
    {position: 5,  empID: 105, name:"Susan",    gender:"Female",  dob:"04/03/1996", department:"Analyst",     yr_of_joining:2018, email:"kolby45@yahoo.com",             contact:7319228716, image:"assets/images/105.png"},
    {position: 6,  empID: 106, name:"Hermann",  gender:"Male",    dob:"10/11/1988", department:"Development", yr_of_joining:2017, email:"hsimonis@hotmail.com",          contact:6127975788, image:"assets/images/106.png"},
    {position: 7,  empID: 107, name:"Shelley",  gender:"Female",  dob:"11/09/1985", department:"Mandobment",  yr_of_joining:2016, email:"hsenger@hotmail.com",           contact:8079785519, image:"assets/images/107.png"},
    {position: 8,  empID: 108, name:"William",  gender:"Male",    dob:"08/06/1995", department:"Developer",   yr_of_joining:2011, email:"corrine.pfeffer@hotmail.com",   contact:7498949198, image:"assets/images/108.png"},
    {position: 9,  empID: 109, name:"Steven",   gender:"Male",    dob:"02/10/1993", department:"Engineer",    yr_of_joining:2013, email:"lang.keegan@haley.biz",         contact:6127947177, image:"assets/images/109.png"},
    {position: 10, empID: 110, name:"Neena",    gender:"Female",  dob:"05/08/1990", department:"Tester",      yr_of_joining:2019, email:"kallie.murray@mcglynn.com",     contact:6711989012, image:"assets/images/110.png"},
    {position: 11, empID: 111, name:"Alexander",gender:"Male",    dob:"06/07/1991", department:"Developer",   yr_of_joining:2020, email:"norbert21@gmail.com",           contact:8079633321, image:"assets/images/111.png"},
    {position: 12, empID: 112, name:"Bruce",    gender:"Male",    dob:"07/07/1991", department:"Analyst",     yr_of_joining:2012, email:"reynolds.elsie@gmail.com",      contact:6127997940, image:"assets/images/112.png"},
    {position: 13, empID: 113, name:"David",    gender:"Male",    dob:"12/04/1992", department:"Mandobr",     yr_of_joining:2013, email:"maverick.mayert@kutch.org",     contact:7887067035, image:"assets/images/113.png"},
    {position: 14, empID: 114, name:"Valli",    gender:"Female",  dob:"10/02/1995", department:"Developer",   yr_of_joining:2018, email:"schumm.genevieve@torphy.com",   contact:6127924377, image:"assets/images/114.png"},
    {position: 15, empID: 115, name:"Diana",    gender:"Female",  dob:"12/09/2000", department:"Engineer",    yr_of_joining:2020, email:"reginald14@sawayn.com",         contact:7931352785, image:"assets/images/115.png"},
    {position: 16, empID: 116, name:"Nancy",    gender:"Female",  dob:"11/08/1992", department:"Analyst",     yr_of_joining:2021, email:"lueilwitz.craig@schmeler.info", contact:9891776279, image:"assets/images/116.png"},
    {position: 17, empID: 117, name:"Daniel",   gender:"Male",    dob:"12/08/1992", department:"Development", yr_of_joining:2012, email:"kulas.kennedy@gmail.com",       contact:6721016906, image:"assets/images/117.png"},
    {position: 18, empID: 118, name:"John",     gender:"Male",    dob:"12/07/1999", department:"Analyst",     yr_of_joining:2020, email:"dustin22@gmail.com",            contact:6127953677, image:"assets/images/118.png"},
    {position: 19, empID: 119, name:"Ismael",   gender:"Male",    dob:"10/06/1979", department:"Tester",      yr_of_joining:2015, email:"nikki80@bahringer.com",         contact:8847204903, image:"assets/images/119.png"},
    {position: 20, empID: 120, name:"Karen",    gender:"Male",    dob:"09/03/1989", department:"Mandobr",     yr_of_joining:2016, email:"everette84@yahoo.com",          contact:8078776409, image:"assets/images/120.png"},
    {position: 21, empID: 121, name:"Adam",     gender:"Male",    dob:"02/02/1999", department:"Developer",   yr_of_joining:2018, email:"lane.blanda@gmail.com",         contact:8167702600, image:"assets/images/121.png"},
    {position: 22, empID: 122, name:"Laura",    gender:"Female",  dob:"01/01/1990", department:"Mandobment",  yr_of_joining:2012, email:"devyn81@gmail.com",             contact:6310342337, image:"assets/images/122.png"},
    {position: 23, empID: 123, name:"Stephen",  gender:"Male",    dob:"10/06/1998", department:"Tester",      yr_of_joining:2019, email:"rcummings@sporer.com",          contact:6127911151, image:"assets/images/123.png"},
    {position: 24, empID: 124, name:"John",     gender:"Male",    dob:"07/04/1992", department:"Developer",   yr_of_joining:2020, email:"greenholt.lucs@cartwright.com", contact:6192132238, image:"assets/images/124.png"},
    {position: 25, empID: 125, name:"Joshua",   gender:"Male",    dob:"11/11/1986", department:"Engineer",    yr_of_joining:2018, email:"vickie25@hotmail.com",          contact:9891705179, image:"assets/images/125.png"},
    {position: 26, empID: 126, name:"James",    gender:"Male",    dob:"12/07/1996", department:"Developer",   yr_of_joining:2014, email:"lennie12@gmail.com",            contact:6794128200, image:"assets/images/126.png"},
    {position: 27, empID: 127, name:"Jason",    gender:"Male",    dob:"09/07/1989", department:"Tester",      yr_of_joining:2013, email:"johnson.harvey@hotmail.com",    contact:6127998372, image:"assets/images/127.png"},
    {position: 28, empID: 128, name:"Hazel",    gender:"Female",  dob:"01/11/1997", department:"Developer",   yr_of_joining:2012, email:"karianne.roob@yahoo.com",       contact:7979755486, image:"assets/images/128.png"},
    {position: 29, empID: 129, name:"Renske",   gender:"Female",  dob:"05/12/1992", department:"Analyst",     yr_of_joining:2020, email:"laaverick.mayert@kutch.org",    contact:6127938213, image:"assets/images/129.png"},
    {position: 30, empID: 130, name:"Matthew",  gender:"Male",    dob:"12/02/1993", department:"Developer",   yr_of_joining:2016, email:"hyenger@hotmail.com",           contact:6127909329, image:"assets/images/130.png"},
  ];

  constructor() { }

  getData(){
    return of(this.ELEMENT_DATA);
  }

  getDetails(employeeId: any){
    return this.ELEMENT_DATA.find((element:any) => element.empID == employeeId)
  }
}

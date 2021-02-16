import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-adding-location',
  templateUrl: './adding-location.component.html',
  styleUrls: ['./adding-location.component.css']
})
export class AddingLocationComponent implements OnInit {
  searchText:string = '';
  searchText1:string = '';
  city:string='';
  option:boolean=true;

  locations:any=[];
  allLocations:any =[];
  



  constructor() {
    this.locations=['Bangalore', 'Delhi', 'Hyderabd','Mumbai'];
    this.allLocations = [... this.locations];

  
  }
  

  ngOnInit(): void {
    
  }




  filterData() {
    console.log('Filtering !', this.searchText);
    this.locations = this.allLocations.filter((item:any) =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filterData2() {
    console.log('Filtering !', this.searchText1);
    this.locations = this.allLocations.filter((item:any) =>
      item.toLowerCase().includes(this.searchText1.toLowerCase())
    );

  }

  addIn(){
    this.option=false;
    console.log('jhdgsagdhghasgjdjahsgj');
    
  }

 


}

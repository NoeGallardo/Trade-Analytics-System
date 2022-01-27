import { Component, OnInit} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficaData } from 'src/app/services/graficaData.service';
import { DropDownService } from "src/app/services/dropDown.service";
import { ChartOptions } from 'chart.js';
import { DatePipe } from '@angular/common';
import { GraficaRequest } from 'src/app/models/GraficaRequest.model';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html'
})
export class Grafica1Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public res:GraficaRequest = new GraficaRequest();

  //Componentes de la grafica
  public barChartLabels: Label[] = ['0'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartData: ChartDataSets[] = [{ data: [0], label: " "}];
  public sitesSelected = new Array<string>();

  // ----- Componentes del DatePicker --------------
  public dateStart = new Date();
  public dateEnd = new Date();
  calendarOptions:DatepickerOptions = {}; 

  // ----- Componentes del Drop Down List -----------
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};

  // ----- Inico del constructor -------------------
  constructor(private _graficaDataService:GraficaData, private _dropDownService:DropDownService, public datepipe:DatePipe) {}

  ngOnInit(): void {
    // ----- DATA de la Grafica -----------------------
    this._graficaDataService.getGraficaLabel()
         .subscribe( value => {
           this.barChartLabels = value;
        });


    // ---- Data del Drop DownList -  Este inicia solo al entrar al componente ------------------
    this._dropDownService.getDropDownListObservable()
      .subscribe( data => {
        this.dropdownList = data;
      });


    // ---- Propiedades del Drop DownList --------------
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

    // ----- Propiedades Date Picker -----------------
    this.calendarOptions = {
      minYear: getYear(new Date()) - 2, // minimum available and selectable year
      maxYear: getYear(new Date()) + 1, // maximum available and selectable year
      placeholder: 'Date', // placeholder in case date model is null | undefined, example: 'Please pick a date'
      format: 'LL/do/yyyy', // date format to display in input LLLL do yyyy
      formatTitle: 'LLLL yyyy',
      formatDays: 'EEEEE',
      firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
      locale: locale, // date-fns locale
      position: 'bottom',
      inputClass: 'calendar', // custom input CSS class to be applied
      calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
      scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
    };
  }
  

  // -------------------Eventos del Drop Down List ------------------------------------------
  onItemSelect(param: any) {
    if(!this.sitesSelected.includes(param.item_text)){
      this.sitesSelected.push(param.item_text);
    }
  }

  onItemDeSelect(param:any){
    if(this.sitesSelected.includes(param.item_text)){
      const index =this.sitesSelected.indexOf(param.item_text);
      if(index > -1){
        this.sitesSelected.splice(index,1);
      }
    }else{}
    console.log(this.sitesSelected);
  }

  onSelectAll(param: any) {
    //Limpio el arreglo
    this.sitesSelected = [];
    var temp = this.dropdownList;
      temp.forEach((element: { item_text: string; }) => {
        this.sitesSelected.push(element.item_text);
      });
  }

  onDeselectAll(){
    this.sitesSelected = [];
  }
  // -------------------- FIN DE EVENTO DROP LIST -----------------------------

  generar(){
    this.res = {startDate:this.dateStart, endDate:this.dateEnd, sites:this.selectedItems};
    this._graficaDataService.getGraficaData2(this.res)
    .subscribe( value => {
      this.barChartData = value;
   });
  }
  // --------------------------------------------
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  restaurantPage = RestaurantPage;
  dist={};
  cuis={};
  myInput=[];
  selected=[];
  indicator={};
  index:any;

  constructor(public navCtrl: NavController) {

  }
  category="district";
  districtList=[
  {area: "中西區",locations: ["金鐘","山頂","半山","中環","上環","西環"],region:1,showDetails:false},
  {area: "灣仔",locations: ["天后","大坑","銅鑼灣","跑馬地","灣仔"],region:1,showDetails:false},
  {area: "港島東",locations: ["柴灣","杏花邨","筲箕灣","西灣河","太古","鰂魚涌"],region:1,showDetails:false},
  {area: "港島南",locations: ["赤柱","石澳","淺水灣","深水灣","鴨脷洲","香港仔","薄扶林"],region:1,showDetails:false},
  {area: "油尖旺",locations: ["尖沙咀","佐敦","油麻地","大角咀","旺角","太子"],region:2,showDetails:false},
  {area: "深水埗",locations: ["石硤尾","深水埗","長沙灣","荔枝角","美孚"],region:2,showDetails:false},
  {area: "九龍城",locations: ["九龍城","九龍塘","土瓜灣","何文田","紅磡"],region:2,showDetails:false},
  {area: "黃大仙",locations: ["彩虹","慈雲山","鑽石山","新蒲崗","黃大仙","樂富"],region:2,showDetails:false},
  {area: "觀塘",locations: ["鯉魚門","油塘","藍田","觀塘","牛頭角","九龍灣"],region:2,showDetails:false},
  {area: "荃灣",locations: ["深井","馬灣","荃灣"],region:3,showDetails:false},
  {area: "屯門",locations: ["屯門"],region:3,showDetails:false},
  {area: "西貢",locations: ["將軍澳","西貢"],region:3,showDetails:false},
  {area: "元朗",locations: ["流浮山","天水圍","元朗","落馬洲"],region:3,showDetails:false},
  {area: "沙田",locations: ["馬鞍山","火炭","沙田","大圍"],region:3,showDetails:false},
  {area: "大埔",locations: ["太和","大埔"],region:3,showDetails:false},
  {area: "新界北",locations: ["羅湖","上水","粉嶺"],region:3,showDetails:false},
  {area: "葵青",locations: ["青衣","葵涌","葵芳"],region:3,showDetails:false},
  {area: "離島",locations: ["蒲苔島","南丫島","坪洲","長洲","大澳","大嶼山","赤鱲角","東涌","愉景灣"],region:3,showDetails:false}
 ];
  cuisineList=[
  {category: "中菜",showDetails:false,
   cuisines: [
    "港式",
    "粵菜 (廣東)",
    "滇菜 (雲南)",
    "客家菜",
    "潮州菜",
    "農家菜",
    "川菜 (四川)",
    "陝菜 (陝西)",
    "閩菜 (福建)",
    "湘菜 (湖南)",
    "晉菜 (山西)",
    "桂菜 (廣西)",
    "新疆菜",
    "京菜 (官府菜)",
    "江浙菜",
    "黔菜 (貴州)",
    "鲁菜 (山東)",
    "淮揚菜",
    "京川滬",
    "東北菜",
    "順德菜",
    "蒙古菜"]
  },
  {category: "粵菜",showDetails:false,
   cuisines: [
    "粵菜 (廣東)",
    "潮州菜",
    "順德菜",
    "客家菜"]
  },
  {category: "亞洲菜",showDetails:false,
   cuisines: [
    "印度菜",
    "日本菜",
    "泰國菜",
    "新加坡菜",
    "越南菜",
    "台灣菜",
    "尼泊爾菜",
    "韓國菜",
    "印尼菜",
    "斯里蘭卡菜",
    "馬來西亞菜",
    "菲律賓菜"]
  },
  {category: "西餐",showDetails:false,
   cuisines: [
    "美國菜",
    "英國菜",
    "西式",
    "意大利菜",
    "德國菜",
    "西班牙菜",
    "法國菜",
    "葡國菜",
    "愛爾蘭菜",
    "澳洲菜",
    "瑞士菜",
    "荷蘭菜",
    "埃及菜",
    "比利時菜",
    "俄國菜",
    "奧地利菜"]
  },
  {category: "中東/地中海菜",showDetails:false,
   cuisines: [
    "土耳其菜",
    "摩洛哥",
    "非洲菜",
    "猶太菜",
    "地中海菜",
    "中東菜",
    "黎巴嫩菜",
    "希臘菜"]
  },
  {category: "中南美菜",showDetails:false,
   cuisines: [
    "墨西哥菜",
    "古巴菜",
    "阿根廷菜",
    "秘魯菜"]
  },
  {category: "多國菜",showDetails:false,
   cuisines: ["多國菜"]
  }
];

  show(item){
    if (item.showDetails) {
        item.showDetails = false;
    } else {
        item.showDetails = true;
    }
  }
  addSearch(item){
    if(this.dist[item]==true||this.cuis[item]==true&&this.indicator[item]!=1){
      this.selected.push(item);
      this.indicator[item]=1;
    } else if(this.indicator[item]==1) {
      this.index = this.selected.indexOf(item);
      this.selected.splice(this.index,1);
      this.indicator[item]=0;
    }
  }
  applyFilter(){
     this.navCtrl.push(RestaurantPage,{
       search:this.selected
     });
  }

}

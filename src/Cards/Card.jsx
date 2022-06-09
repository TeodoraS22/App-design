import React, {Component} from 'react';
import Card from './CardUI';

import img1 from '../assets/3.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/1.jpg'
import img4 from '../assets/5.jpg'
import img5 from '../assets/7.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/8.jpg'
import img8 from '../assets/1.jpg'
import img9 from '../assets/1.jpg'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
render() {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc = {img3} id="1" link="https://ro.pinterest.com/pin/358528820346462446/" title='Kitchen' text="Bucataria, incaperea care aduce familia impreuna la masa, iar in prezent este caracterizata de design si functionalitate in egala masura. Mai mult de atat notiunile legate de bucatarie pot ajuta la maximizarea spatiului."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img2} id="2"  link="https://ro.pinterest.com/search/pins/?rs=ac&len=2&q=living%20room%20decor&eq=living%20room&etslf=2972&term_meta[]=living%7Cautocomplete%7C0&term_meta[]=room%7Cautocomplete%7C0&term_meta[]=decor%7Cautocomplete%7C0" title='Living room' text="Livingul, zona din locuință cea mai importanta care trebuie sa fie multifunctionala in functie de activitatile desfasurate. Pentru a amenaja trebuie sa se tina cont de mai multe aspecte pentru a imbina utilul cu placutul."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img1} id="3" link="https://ro.pinterest.com/search/pins/?q=bathroom&rs=typed&term_meta[]=bathroom%7Ctyped" title='Bathroom' text="Baia pentru a fi amenajata presupune realizarea unui proiect initial, in care sunt planificate ideile si cautarea alternativelor in functie de spatiu. Parte din locuinta care poate fi o adevarata provocare in privinta amenajarii corecte"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img4} id="4" link="https://ro.pinterest.com/search/pins/?q=bedroom&rs=typed&term_meta[]=bedroom%7Ctyped" title='Bedroom' text="Dormitorul joaca un rol la fel de important ca si livingul, care reprezinta locul de odihna. Daca doresti un mediu placut si odihnitor aici se afla notinulie de baza."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img5} id="5" link="https://ro.pinterest.com/search/pins/?q=Children%20bedroom&rs=typed&term_meta[]=Children%7Ctyped&term_meta[]=bedroom%7Ctyped" title='Children bedroom' text="Camera copiilor este locul in care se joaca si trebuie sa doarma, astfel trebuie imbinate corect aspecte esentiale pentru ca copilului sa ii placa."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img6} id="6" link="https://ro.pinterest.com/search/pins/?q=Entry&rs=typed&term_meta[]=Entry%7Ctyped" title='Entry' text="Intrarea in locuinta este provocarea suprema pentru ca spatial sa fie util. Nu doar depozitarea este importanta ci si faptul ca nu trebuie sa se vada hainele si papucii."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img7} id="7" link="https://ro.pinterest.com/search/pins/?q=office&rs=typed&term_meta[]=office%7Ctyped" title='Office room' text="Camera office are un rol important pentru cei care lucreaza si acasa. Asezarea biroului in camera si luminile fiind doua elemente foarte importante."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img8} id="8" link="https://ro.pinterest.com/pin/21251429482613262/" title='1' text="debara"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img9} id="9" link="https://ro.pinterest.com/pin/21251429482613262/" title='1' text="garaj"/>
                </div>
            </div>
        </div>

    );
}
}

export default Cards;
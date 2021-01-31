import React, { Component } from "react";

export default class SinhVien extends Component {
  hoTen = "công tin";
  lop = "BC001";


  renderThongTinSV = (params)=>{

    return (<ul>
        <li> họ tên: {this.hoTen} </li>
        <li> lớp: {this.lop}</li>
        <li>trung tâm: {params}</li>
      </ul>)

  }

  render() {
    const tenTrungTam = "CyberSoft";

    return (
      <div className="container">
        {this.renderThongTinSV(tenTrungTam)}
      </div>
    );
  }
}

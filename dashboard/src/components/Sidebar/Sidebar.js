import React, { Component } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu : [
        {
          title: "Güncel Durum",
          notification: true,
          badgeType: "danger",
          badgeCount: 10,
          arrow: false,
          icon: "fi-air-play",
          subMenu: []
        }, 

        {
          title: "Slider Yönetimi",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: true,
          icon: "fi-layers",
          subMenu: [
            {
              link: "yeni-slide.html",
              text: "Yeni Slide Ekle"
            },
            {
              link: "tum-slide.html",
              text: "Tümünü Listele"
            }
          ]
        },

        {
          title: "Servisler",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: true,
          icon: "fi-paper",
          subMenu: [
            {
              link: "yeni-servis.html",
              text: "Yeni Servis Ekle"
            },
            {
              link: 'tum-servisler.html',
              text: 'Tümünü Listele'
            }
          ]
        },
        
        {
          title: "Hakkımızda",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: false,
          icon: "fa fa-handshake-o",
          subMenu: []
        },

        
        {
          title: "Referanslarımız",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: true,
          icon: "fa fa-fort-awesome",
          subMenu: [
            {
              link: "yeni-referans.html",
              text: "Yeni Referans Ekle"
            },
            {
              link: 'tum-referanslar.html',
              text: 'Tümünü Listele'
            }
          ]
        },

        
        {
          title: "Ekran Görüntüleri",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: true,
          icon: "fa fa-camera-retro",
          subMenu: [
            {
              link: "yeni-goruntu.html",
              text: "Yeni Görüntü Ekle"
            },
            {
              link: 'tum-goruntuler.html',
              text: 'Tümünü Listele'
            }
          ]
        },

        
        {
          title: "Fiyatlarımız",
          notification: false,
          badgeType: "",
          badgeCount: 0,
          arrow: true,
          icon: "fa fa-btc",
          subMenu: [
            {
              link: "yeni-paket.html",
              text: "Yeni Fiyat Paketi"
            },
            {
              link: 'fiyat-tablosu.html',
              text: 'Fiyat Tablosu'
            }
          ]
        },

      ]
    };
  }

  render() {
    const menuItems = this.state.mainMenu.map(item => (
      <MenuItem title={item.title} notification={item.notification} badgeType={item.badgeType} badgeCount={item.badgeCount} arrow={item.arrow} icon={item.icon} menu={item.subMenu} /> 
    ));

    return (
      <div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
          <Logo />

          <div id="sidebar-menu">
            <ul class="metismenu" id="side-menu">

            {menuItems}


              <li class="menu-title">More</li>

            </ul>
          </div>

          <div class="clearfix" />
        </div>
      </div>
    );
  }
}

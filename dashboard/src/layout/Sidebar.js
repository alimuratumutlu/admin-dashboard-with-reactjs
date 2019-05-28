import React, { Component } from "react";
import Item from "./sidebar/Item";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mainMenu: [
        {
          id: 1,
          title: "Blog Yazıları",
          arrow: true,
          icon: "fa fa-amazon",
          subMenu: [
            {
             link: "/add/post",
              text: "Yeni Blog Yazısı"
            },
            {
              link: "/list/posts",
              text: "Blog Yönetimi"
            }
          ]
        },

        {
          id: 2,
          title: "Landing Page",
          arrow: true,
          icon: "fa fa-list-alt",
          subMenu: [
            {
              link: "/add/landing-page",
              text: "Yeni Landing Page"
            },
            {
              link: "/list/landing-pages",
              text: "Landing Page Yönetimi"
            }
          ]
        },

        {
          id: 3,
          title: "Sabit Sayfalar",
          arrow: true,
          icon: "fi-layout",
          subMenu: [
            {
              link: "/add/page",
              text: "Yeni Sayfa Ekle"
            },
            {
              link: "/list/pages",
              text: "Sayfa Yönetimi"
            }
          ]
        }
      ],
      componentMenu: [
        {
          id: 4,
          title: "Genel Bilgiler",
          arrow: true,
          icon: "fa fa-vcard-o",
          subMenu: [
            {
              link: "/edit/settings",
              text: "Site Yönetimi"
            },
            {
              link: "/edit/menu",
              text: "Menü Yönetimi"
            }
          ]
        },
        {
          id: 5,
          title: "Referanslar",
          arrow: true,
          icon: "fa fa-connectdevelop",
          subMenu: [
            {
              link: "/add/referance",
              text: "Yeni Referans Ekle"
            },
            {
              link: "/list/referances",
              text: "Referans Yönetimi"
            }
          ]
        },
        {
          id: 6,
          title: "Fiyat Tablosu",
          arrow: true,
          icon: "fa fa-pencil-square-o",
          subMenu: [
            {
              link: "/add/price-table",
              text: "Yeni Fiyat Tablosu"
            },
            {
              link: "/list/price-tables",
              text: "Tabloları Yönet"
            }
          ]
        },
        {
          id: 7,
          title: "Kayan İçerik",
          arrow: true,
          icon: "fi-layers",
          subMenu: [
            {
              link: "/list/slides",
              text: "Slider Yönetimi"
            },
            {
              link: "/list/carousels",
              text: "Carousel Yönetimi"
            }
          ]
        },

        {
          id: 8,
          title: "Özel Nitelikler",
          arrow: true,
          icon: "fi-paper",
          subMenu: [
            {
              link: "/add/feature",
              text: "Yeni Özellik"
            },
            {
              link: "/list/features",
              text: "Özellik Yönetimi"
            }
          ]
        },
        {
          id: 9,
          title: "Ekran Görüntüleri",
          arrow: true,
          icon: "fa fa-picture-o",
          subMenu: [
            {
              link: "/add/screenshot",
              text: "Yeni Görüntü Ekle"
            },
            {
              link: "/list/screenshots",
              text: "Galeri Yönetimi"
            }
          ]
        },

        {
          id: 10,
          title: "İletişim Bilgileri",
          arrow: true,
          icon: "fa fa-envelope-open-o",
          subMenu: [
            {
              link: "/list/contact-forms",
              text: "İletişim Formları"
            },
            {
              link: "/list/social-accounts",
              text: "Sosyal Hesaplar"
            },
            {
              link: "/list/contact-details",
              text: "Adres & Telefon"
            }
          ]
        },

        {
          id: 11,
          title: "Ürün & Hizmetler",
          arrow: true,
          icon: "fa fa-paper-plane-o",
          subMenu: [
            {
              link: "/add/product",
              text: "Yeni Ürün"
            },
            {
              link: "/list/products",
              text: "Ürün Yönetimi"
            }
          ]
        },

        {
          id: 12,
          title: "Sık Sorulan Sorular",
          arrow: true,
          icon: "fa fa-life-saver",
          subMenu: [
            {
              link: "/add/answer",
              text: "Yeni Cevap Ekle"
            },
            {
              link: "/list/answers",
              text: "Cevap Yönetimi"
            }
          ]
        }
      ],
      interaktifIcerikMenu: [
        {
          id: 13,
          title: "Duyurular",
          arrow: true,
          icon: "fa  fa-bell-o",
          subMenu: [
            {
              link: "/add/announcement",
              text: "Yeni Duyuru Ekle"
            },
            {
              link: "/list/announcements",
              text: "Duyuru Yönetimi"
            }
          ]
        },

        {
          id: 14,
          title: "Yorumlar",
          arrow: true,
          icon: "fa fa-commenting-o",
          subMenu: [
            {
              link: "/add/comment",
              text: "Yeni Yorum Ekle"
            },
            {
              link: "/list/comments",
              text: "Yorum Yönetimi"
            }
          ]
        },
        {
          id: 15,
          title: "E-Mail Bülteni",
          arrow: true,
          icon: "fi-mail",
          subMenu: [
            {
              link: "/add/announcements",
              text: "Yeni Bülten Ekle"
            },
            {
              link: "/list/subscribers",
              text: "Abone Yönetimi"
            },
            {
              link: "/list/bulletins",
              text: "Bülten Yönetimi"
            }
          ]
        }
      ]
    };
  }

  render() {
    const mainMenuItems = this.state.mainMenu.map(item => (
      <Item
        id={item.id}
        title={item.title}
        notification={item.notification}
        arrow={item.arrow}
        icon={item.icon}
        menu={item.subMenu}
        link={item.link}
      />
    ));

    const componentItems = this.state.componentMenu.map(item => (
      <Item
        id={item.id}
        title={item.title}
        notification={item.notification}
        arrow={item.arrow}
        icon={item.icon}
        menu={item.subMenu}
        link={item.link}
      />
    ));

    const interaktifItems = this.state.interaktifIcerikMenu.map(item => (
      <Item
        id={item.id}
        title={item.title}
        notification={item.notification}
        arrow={item.arrow}
        icon={item.icon}
        menu={item.subMenu}
        link={item.link}
      />
    ));

    return (
      <aside div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
          <div id="sidebar-menu">
            <ul class="metismenu" id="side-menu">
              <li class="menu-title">Site Yönetimi</li>

              {mainMenuItems}

              <li class="menu-title">Modüller</li>

              {componentItems}

              <li class="menu-title">İnteraftif İçerik</li>

              {interaktifItems}
            </ul>
          </div>

          <div class="clearfix" />
        </div>
      </aside>
    );
  }
}
export default Sidebar;

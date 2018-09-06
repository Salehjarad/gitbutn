import React, { Component } from "react";
import "./App.css";
import { TwitterPicker, SliderPicker } from "react-color";
import Arrow from "./components/Arrow/Arrow";
import Icons from "./components/Icons/Icons";
import IconItem from "./components/Iconssearch/Iconssearch";
import iconsArray from "./assets/icons";
import { Copy, OpenWindow } from './components/Icons/CopyAndOpen';
import { checkType } from './components/Actions';
import Lottie from 'react-lottie';
import * as animationD from './assets/sja.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorPack: [
        "#000000",
        "#525252",
        "#767676",
        "#868686",
        "#969696",
        "#d9d9d9",
        "#f1f1f1"
      ],
      btn: false,
      showPicker1: false,
      showPicker2: false,
      showPickerTitle: false,
      titleColor: "#000000",
      subtitleColor: "#333333",
      txtBgColor: "#cccccc",
      iconbgcolor: "#999999",
      iconColor: "#000000",
      title: "Title",
      subtitle: "Subtitle",
      iconSearch: "",
      iconSearchStick: "gitbutn",
      searchArray: [],
      urlall: "",
      fillLogo: "#ffffff",
      cln: "a-scroll",
      cln2: "a-borderw",
      done: false,
      loading: false,
      shortUrl: ''
    };

    this.setTextBgColor = this.setTextBgColor.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchArray: iconsArray
    });
  }

  renderSerch() {
    var updatedList = iconsArray;
    updatedList = updatedList.filter(item => {
      return (
        item.icon.toLowerCase().slice(0, this.state.iconSearch.length) ===
        this.state.iconSearch.toLowerCase()
      );
    });
    this.setState({ searchArray: updatedList });
  }

  setIconFromSearch(e) {
    this.setState({
      iconSearchStick: e,
      done: false,
    });
    this.clearIconSearch();
  }

  renderSerchDivo() {
    if (this.state.iconSearch.length > 1) {
      return (
        <div className="serch-container">
          {this.state.searchArray.map((item, index) => (
            <IconItem
              key={index}
              name={item.icon}
              patha={item.patha}
              pathb={item.pathb}
              pathc={item.pathc}
              pathd={item.pathd}
              pathe={item.pathe}
              iconItemClick={() => this.setIconFromSearch(item.icon)}
            />
          ))}
        </div>
      );
    }
  }

  showColorPicker1() {
    this.setState({
      showPicker1: !this.state.showPicker1
    });
  }
  showColorPicker2() {
    this.setState({
      showPicker2: !this.state.showPicker2
    });
  }

  setTextBgColor(color) {
    this.setState({
      txtBgColor: color.hex,
      done: false,
    });
  }

  setIconBgColor(color) {
    this.setState({
      iconbgcolor: color.hex,
      done: false,
    });
  }

  onChangeTitle(title) {
    this.setState({
      title: title.target.value,
      done: false,
    });
  }

  onChangeSubTitle(sub) {
    this.setState({
      subtitle: sub.target.value,
      done: false,
    });
  }

  onChangeIconSearch(sub) {
    this.setState({
      iconSearch: sub.target.value,
      done: false,
    });
    this.renderSerch();
  }

  clearTitle() {
    this.setState({
      title: "",
      titleColor: "#000000"
    });
  }

  clearSubTitle() {
    this.setState({
      subtitle: ""
    });
  }

  clearIconSearch() {
    this.setState({
      iconSearch: ""
    });
  }

  hideAllPicker() {
    if (this.state.showPickerTitle) {
      this.setState({
        showPickerTitle: false
      });
    }
  }

  showTitleColorPicker() {
    this.setState({
      showPickerTitle: !this.state.showPickerTitle
    });
  }

  changeTitleColor(e) {
    this.setState({
      titleColor: e.hex,
      done: false,
    });
  }

  changeSubTitleColor(e) {
    this.setState({
      subtitleColor: e.hex,
      done: false,
    });
  }

  changeIconColor(e) {
    this.setState({
      iconColor: e.hex,
      done: false,
    });
  }

  genrateLinkLg() {
    this.setState({
      loading: true
    })
    const { title, subtitle, iconSearchStick, iconColor, titleColor, subtitleColor, iconbgcolor, txtBgColor } = this.state;
    const list = {
      title,
      sub: subtitle,
      icon: iconSearchStick,
      ico: iconColor.replace('#', ''),
      lco: iconbgcolor.replace('#', ''),
      rco: txtBgColor.replace('#', ''),
      tc: titleColor.replace('#', ''),
      sc: subtitleColor.replace('#', ''),
      size: 'lg'
    }
    checkType('button', list).then((res) => {
      this.setState({
        loading: false,
        shortUrl: res,
        done:true
      })
    }).catch((e) => {
      this.setState({
        loading: false,
        shortUrl: '',
        done: false
      })
    })
  }

  genrateLinkMd() {
    const { title, subtitle, iconSearchStick, iconColor, titleColor, subtitleColor, iconbgcolor, txtBgColor } = this.state;
    const list = {
      title,
      sub: subtitle,
      icon: iconSearchStick,
      ico: iconColor.replace('#', ''),
      lco: iconbgcolor.replace('#', ''),
      rco: txtBgColor.replace('#', ''),
      tc: titleColor.replace('#', ''),
      sc: subtitleColor.replace('#', ''),
      size: 'md'
    }
    checkType('button', list).then((res) => {
      this.setState({
        loading: false,
        shortUrl: res,
        done:true
      })
    }).catch((e) => {
      this.setState({
        loading: false,
        shortUrl: '',
        done: false
      })
    })
  }

  genrateLinkSm() {
    const { title, subtitle, iconSearchStick, iconColor, titleColor, subtitleColor, iconbgcolor, txtBgColor } = this.state;
    const list = {
      title,
      sub: subtitle,
      icon: iconSearchStick,
      ico: iconColor.replace('#', ''),
      lco: iconbgcolor.replace('#', ''),
      rco: txtBgColor.replace('#', ''),
      tc: titleColor.replace('#', ''),
      sc: subtitleColor.replace('#', ''),
      size: 'sm'
    }
    checkType('button', list).then((res) => {
      this.setState({
        loading: false,
        shortUrl: res,
        done:true
      })
    }).catch((e) => {
      this.setState({
        loading: false,
        shortUrl: '',
        done: false
      })
    })
  }

  copyUrl() {
    var textField = document.createElement("textarea");
    textField.innerText = this.state.shortUrl;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  openUrl(){
    window.open(this.state.shortUrl, '_blank')
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationD,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div id="apph" className="App">
        <div
          className="all-container"
        >
          <div className='copy-lovy'>
            {!this.state.done ?
            <div className='copy-link-app-container'>
            {!this.state.loading ?
            <div className='copy-link-app-container-in'>
            <p>Create Button Link Size</p>
              <button className='copy-btn-in-app'  onClick={this.genrateLinkLg.bind(this)}>Lg</button>
              <button className='copy-btn-in-app'  onClick={this.genrateLinkMd.bind(this)}>Md</button>
              <button className='copy-btn-in-app'  onClick={this.genrateLinkSm.bind(this)}>Sm</button>
            </div>
            :
            <Lottie options={defaultOptions}
            height={30}
            width={30}
            isStopped={false}
            isPaused={false}/>
          }
            </div>
              :
              <div className='copy-link-app-container'>
                <div helpo="Copy URL" onClick={this.copyUrl.bind(this)} className='copy-btn-to-copy tct-tt'>
                  <Copy width='20' fill='#fff' />
                </div>
                <p>{this.state.shortUrl.split("://")[1]}</p>
                <div helpo='Open Link' onClick={this.openUrl.bind(this)} className='copy-btn-to-copy tct-tt'>
                  <OpenWindow width='20' fill='#fff' />
                </div>
              </div>
              }
          </div>
          <div className="options">
            {/* Left Button Bg Color*/}

              <div helpocolors='Change Icon Background Color' className="slider-picker-style-all colorsnto">
                <div className="slider-picker-style">
                  <div helpo="Change Icon Background Color" className="slider-conter">
                    <SliderPicker
                      onChange={e => this.setIconBgColor(e)}
                      color={this.state.iconbgcolor}
                    />
                  </div>
                  <TwitterPicker
                    colors={this.state.colorPack}
                    triangle="hide"
                    onChange={e => this.setIconBgColor(e)}
                    color={this.state.iconbgcolor}
                  />
                </div>
                <Arrow width="30" className="arrow-top-left" fill={"#ccc"} />
              </div>
            )}

            <div className="btn-container">
              <div
                className="iconbg"
                onClick={this.showColorPicker1.bind(this)}
                style={{ backgroundColor: this.state.iconbgcolor }}
              >
                <Icons
                  icon={this.state.iconSearchStick}
                  width="80"
                  height="80"
                  fill={this.state.iconColor}
                  logofill={this.state.iconColor}
                />
              </div>
              <div
                className="txtbg"
                style={{ backgroundColor: this.state.txtBgColor }}
                onClick={this.showColorPicker1.bind(this)}
              >
                <h3 style={{ color: this.state.titleColor }}>
                  {this.state.title || "Button Title"}
                </h3>
                <p style={{ color: this.state.subtitleColor }}>
                  {this.state.subtitle || "SubTitle"}
                </p>
              </div>
            </div>

            {/* Right Button Bg Color*/}

              <div helpocolors='Change Text Background Color'  className="slider-picker-style-all colorsnto">
                <Arrow width="30" className="arrow-top-right" fill={"#ccc"} />
                <div className="slider-picker-style">
                  <div className="slider-conter">
                    <SliderPicker
                      onChange={e => this.setTextBgColor(e)}
                      color={this.state.txtBgColor}
                    />
                  </div>
                  <TwitterPicker
                    colors={this.state.colorPack}
                    triangle="hide"
                    onChange={e => this.setTextBgColor(e)}
                    color={this.state.txtBgColor}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="pickers-container">

              <div className="icon-left-container">
                <div className="icon-cho-holder">
                  <Arrow
                    width="30"
                    height="30"
                    fill="#ccc"
                    className="icon-arrow-top"
                  />
                  <div className="icon-input-holder">
                    <div className="icon-left-colors-container">
                      <div style={{ marginBottom: "10px" }}>
                        <TwitterPicker
                          onChange={e => this.changeIconColor(e)}
                          color={this.state.iconColor}
                          colors={this.state.colorPack}
                          triangle="hide"
                        />
                      </div>
                      <div style={{ marginBottom: "5px" }}>
                        <SliderPicker
                          color={this.state.iconColor}
                          onChange={e => this.changeIconColor(e)}
                        />
                      </div>
                    </div>
                    <div className="subtext-input">
                      <div className="colorValue" />

                      <input
                        type="text"
                        ref={s => (this.iconsearchtxt = s)}
                        value={this.state.iconSearch}
                        placeholder="Search For Icons"
                        autoComplete="off"
                        onChange={e => this.onChangeIconSearch(e)}
                      />
                      <img
                        src={require("./assets/trash.svg")}
                        width="18"
                        className="trash-text"
                        style={{
                          display: this.state.subtitle.length >= 3 ? "" : ""
                        }}
                        onClick={this.clearIconSearch.bind(this)}
                      />
                    </div>

                    {this.renderSerchDivo()}
                  </div>
                </div>
              </div>

              <div
                className="color-picker-text"
                style={{ display: this.state.showPicker1 ? "block" : "block" }}
              >
                <Arrow width="30" className="arrow" fill={"#ccc"} />
                <div className="txt-div-container">
                  {/* inputs color and picker */}
                  <div
                    className="inputs-holder-text"
                    style={{ backgroundColor: "#ccc" }}
                  >
                    <TwitterPicker
                      onChange={e => this.changeTitleColor(e)}
                      color={this.state.titleColor}
                      colors={this.state.colorPack}
                      triangle="hide"
                    />
                    <SliderPicker
                      color={this.state.titleColor}
                      onChange={e => this.changeTitleColor(e)}
                    />
                    <div className="text-input">
                      <div
                        className="colorValue"
                        onClick={() => this.showTitleColorPicker()}
                        style={{ backgroundColor: this.state.titleColor }}
                        onClick={this.showTitleColorPicker.bind(this)}
                      />

                      <input
                        type="text"
                        ref={t => (this.title = t)}
                        value={this.state.title}
                        placeholder="Button Title"
                        autoComplete="off"
                        onChange={e => this.onChangeTitle(e)}
                      />
                      <img
                        src={require("./assets/trash.svg")}
                        width="18"
                        className="trash-text"
                        onClick={this.clearTitle.bind(this)}
                        style={{
                          display: this.state.title.length >= 3 ? "" : ""
                        }}
                      />
                    </div>

                    <div className="subtext-input">
                      <div
                        className="colorValue"
                        style={{ backgroundColor: this.state.subtitleColor }}
                      />

                      <input
                        type="text"
                        ref={s => (this.subtitle = s)}
                        value={this.state.subtitle}
                        placeholder="Subtitle"
                        autoComplete="off"
                        onChange={e => this.onChangeSubTitle(e)}
                      />
                      <img
                        src={require("./assets/trash.svg")}
                        width="18"
                        className="trash-text"
                        style={{
                          display: this.state.subtitle.length >= 3 ? "" : ""
                        }}
                        onClick={this.clearSubTitle.bind(this)}
                      />
                    </div>
                    <TwitterPicker
                      onChange={e => this.changeSubTitleColor(e)}
                      color={this.state.subtitleColor}
                      colors={this.state.colorPack}
                      triangle="hide"
                    />

                    <SliderPicker
                      color={this.state.subtitleColor}
                      onChange={e => this.changeSubTitleColor(e)}
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
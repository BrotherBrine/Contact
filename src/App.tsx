// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Social from './components/Social';
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { css, useTheme, ThemeContext } from '@emotion/react';
import { SelectOption } from './components/Inputs/Input';
import QRCode from 'react-qr-code';
import { EmailProperty, FNProperty, HobbyProperty, LevelParameter, ParameterValueType, PhotoProperty, TelProperty, TextType, TypeParameter, URIType, VCARD } from 'vcard4';
import Input from './components/Inputs/Input';
import { BrowserView, MobileView } from 'react-device-detect';
import { SyntheticEvent, useEffect, useState } from 'react';
import { If, Then, Else } from 'react-if';
import Clock from './pages/Clock';
import Modal from './components/Modal';
import JournalEntry from './pages/JounalEntry';

function App() {
  // const [count, setCount] = useState(0)

  const fn = new FNProperty([], new TextType("Zachary Stevenson"));
  const cell = new TelProperty(
    [new TypeParameter("TelProperty", new ParameterValueType("cell"))],
    new TextType("+17656020887"),
  );


  // EMAIL property
  const email = new EmailProperty(
    [new TypeParameter("emailproperty", new ParameterValueType("home"))],
    new TextType("zacharytstevenson@gmail.com"),
  );
  const imagePath = "https://media.licdn.com/dms/image/D5603AQGeoEQkCpikUw/profile-displayphoto-shrink_800_800/0/1685727554428?e=1711584000&v=beta&t=HE64nPSnOblb9AKgrqv3PEpIGLO2Frv9DFt_xQknaIM"
  const photo = new PhotoProperty(
    [], new URIType(imagePath));
  const hobby = new HobbyProperty(
    [],
    new TextType("Chess"),
  );

  const vcard = new VCARD([fn, cell, photo, email, hobby]);
  const [isFullscreen, setIsfullscreen] = useState<boolean>(document.fullscreenElement === null ? false : true);
  const selectOptions: SelectOption[] = [
    {
      display: 'cheese', 
      value: 'Cheese',
      isPlaceholder: false,
      isSelected: false
    }, 
    {
      display: 'bread', 
      value: 'Bread',
      isPlaceholder: false,
      isSelected: false
    }, 
    {
      display: 'beer', 
      value: 'Beer',
      isPlaceholder: false,
      isSelected: false
    }
  ];
  const [selectValue, setSelectValue] = useState('');
  const deviceType = window.navigator.userAgent;
  const [cheese, setCheese] = useState('');
  const isIOS: boolean = deviceType.includes('iPhone');
  const inputChanged = (e: string) => {
    setCheese(e);
  };
  const [showHeader, setShowHeader] = useState(true);
  const toggleShowHeader = () => {
    setShowHeader(!showHeader);
  };
  // const headerHeight =
  const [color, setColor] = useState('#000000');
  const now = (new Date);
  const [datepicker1, setDatepicker1] = useState(now);
  const [emailAddr, setEmailAddr] = useState('');
  const [textarea, setTextarea] = useState('');
  const routes = window.location.pathname.split('/');
  const [numberVal, setNumberVal] = useState(0);
  const [file, setFile] = useState();
  const [isChecked, setIsChecked] = useState(false);
  console.log('color', color);
  const handleNumValChange = (e: number) => {
    console.log('e', e);
    setNumberVal(e);
  }

  const [switchSize,setSwitchSize]=useState(22);
  const [switchBorderSize,setSwitchBorderSize]=useState(1);
  const [switchWidth,setSwitchWidth]=useState(2);

  const handleFullScreen = () => {
    setIsfullscreen(document.fullscreenElement === null ? false : true);
  }

  useEffect(() => {
    console.log('file', file);
    document.onfullscreenchange = handleFullScreen;

    return () => {

      document.onfullscreenchange = null;
    }
  }, [file]);
  return (
    <div css={css({ display: 'flex', flexDirection: 'column', scrollbarColor: `${color} white` })}>
      <If condition={showHeader}><Then>
        <div id='header' css={css({ height: '100px', backgroundColor: 'green' })}>
          <FontAwesomeIcon id='hamburger' icon={solid('bars')} />
        </div>
      </Then></If>
      <div id='container' css={css({
        display: 'flex',
        flexGrow: 100,
        flexDirection: 'row',
        width: '100vw',
        alignContent: "center",
        padding: '0px',
        margin: '0px',
        backgroundColor: 'lightgrey',
        height: `${showHeader ? 'calc(100vh - 100px)' : '100vh'}`,
        overflowY: 'auto',
        overflowX: 'auto'
      })}>
        <If condition={routes[1].toLowerCase() == 'clock'}>
          <Then>
            <Clock id='clockpage' />
          </Then>
          <Else>
            <If condition={routes[1].toLowerCase() == 'captainslog'}>
              <Then>
                <JournalEntry id={'quique'} />
              </Then>
              <Else>
                <div css={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'space-evenly',
                  width: 'calc(100% - 50px)',
                  padding: '0 0 0 20px'
                })}>
                  {deviceType}
                  <BrowserView>
                    browser
                  </BrowserView>
                  <MobileView>
                    mobile
                  </MobileView>
                  <Social id="fb" url="https://www.facebook.com/zstevenson2/" label='Facebook'>
                    <FontAwesomeIcon id='fb-icon' icon={brands('facebook')} />
                  </Social>
                  <Social id="LI" url="https://www.linkedin.com/in/zachary-stevenson-26724774/" label='LinkedIn'>
                    <FontAwesomeIcon id='LI-icon' icon={brands('linkedin')} />
                  </Social>
                  <div css={css({ height: '500px' })}>
                    <QRCode id='QRCode' value={vcard.repr()}></QRCode>
                  </div>
                  <Input id='toggle1' type='toggle' label="on or off?" value={isChecked} onClick={(e: SyntheticEvent) => {
                    console.log('e',e);
                    console.log('type',typeof(e));
                    setIsChecked(!isChecked);
                  }} height={switchSize} borderSize={switchBorderSize} width={switchWidth}/>
                  <Input id='number2' type='number' label='switch size' pattern='\d*' value={switchSize} onChange={setSwitchSize} />
                  <Input id='number3' type='number' label='switch border' pattern='\d*' value={switchBorderSize} onChange={setSwitchBorderSize} />
                  <Input id='number4' type='number' label='switch width' pattern='\d*' value={switchWidth} onChange={setSwitchWidth} />
                  <Input id='text1' type='text' label='cheese' placeholder='enter your cheese' value={cheese} onChange={setCheese} />
                  <Input id='date3' type='date' placeholder='01/01/01' label='Birthdate' value={datepicker1} onChange={setDatepicker1} />
                  <Input id='password4' type='password' label='password' />
                  <Input id='email' type='email' label='email' value={emailAddr} onChange={setEmailAddr} />
                  <Input id='color' type='color' label='color' value={color} onChange={(v: string) => setColor(v)} />
                  <Input id='select' type='select' label='select' options={selectOptions} value={selectValue} onChange={setSelectValue} placeholder='select an option' />
                  <Input id='select' type='select' label='select' options={selectOptions} value={selectValue} onChange={setSelectValue} placeholder='choose' />
                  <Input id='btton' type='button' value={isFullscreen ? 'EXIT FULL SCREEN' : 'FULL SCREEN'} onClick={() => { isFullscreen ? document.exitFullscreen() : document.documentElement.requestFullscreen() }} />

                  <Input id='testfile' type='file' value={file} onChange={setFile} />
                  <Input id='download' type='button' value={'download'} onClick={() => { console.log('file', file); }} />
                  <Input id='textarea' type='textarea' label='Some Text Box' value={textarea} onChange={setTextarea} minHeight={100} />
                  <Input id='range' label='hi' type='range' value={numberVal} onChange={handleNumValChange} />
                  <Social id="social-email" url="mailto:zacharytstevenson@gmail.com" label='zacharytstevenson@gmail.com'>
                    <FontAwesomeIcon id='email-icon' icon={solid('envelope')} />
                  </Social>
                  <Modal id={'5dd'} dismissModal={() => { }}><div>hi im a modal</div></Modal>
                </div></Else>
            </If>
          </Else>
        </If>
      </div>
    </div>
  )
}

export default App
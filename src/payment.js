import { Card,
         Form,
         FormLayout,
         TextField,
         RadioButton,
         Button,
         SettingToggle,
         TextStyle,
         Link,
         Select
        } from '@shopify/polaris';
import React from 'react';
import { useParams } from "react-router-dom";


function Payment()
{
  const handleSubmit = () => {
    alert(kartAdSoyad);
  }
  //kartAdSoyad, kartNo, skt, cvv
  const [kartAdSoyad, setKartAdSoyad] = React.useState('');
  const [kartNo, setKartNo] = React.useState('');
  const [skt, setSkt] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [radioVal, setRadioVal] = React.useState('disabled');
  const [selecteday, setSelecteday] = React.useState();
  const [selectedYil, setSelectedYil] = React.useState();
  const ay = [
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
        {label: '7', value: '7'},
        {label: '8', value: '8'},
        {label: '9', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
  ];
  const yil = [
        {label: '2021', value: '2021'},
        {label: '2022', value: '2022'},
        {label: '2023', value: '2023'},
        {label: '2024', value: '2024'},
        {label: '2025', value: '2025'},
        {label: '2026', value: '2026'},
        {label: '2027', value: '2027'},
        {label: '2028', value: '2028'},
        {label: '2029', value: '2029'},
        {label: '2030', value: '2030'},
        {label: '2031', value: '2031'}
  ];
  const handleMonthChange = React.useCallback((value) => setSelecteday(value), []);
  const handleYearChange = React.useCallback((value) => setSelectedYil(value), []);
  const handleRadioChange = React.useCallback(
   (_checked, newValue) => setRadioVal(newValue),
     [],
   );
  const [active, setActive] = React.useState(false);

  const handleToggle = React.useCallback(() => setActive((active) => !active), []);

  const contentStatus = active ? 'Ödendi' : 'Öde';
  const textStatus = '120 TL';


  const handleKartIsimChange = (value) => {
    setKartAdSoyad(value);
  }
  const handleKartNoChange = (value) => {
    setKartNo(value);
  }
  const handleSktChange = (value) => {
    setSkt(value);
  }
  const handleCvvChange = (value) => {
    setCvv(value);
  }


 //let radios = [radioPesin, radioiki, radioUc_1, radioUc_2, radioDort, radioBes, radioAlti, radioYedi, radioSekiz, radioDokuz, radioOn, radioOnbir, radioOniki];

const radiolariYaz = () => {
  //kartAdSoyad, kartNo, skt, cvv
 console.log(radioVal);

}
const { id } = useParams();
  return(
    <div className="content-area">
    <Card>
    <h1>Order id is {id}</h1>
    <div className="form-frame">
    <Form onSubmit={handleSubmit}>
    <img
      alt="Logo"
      className="payment-logo"
      src="http://www.akbank.com/SiteAssets/img/akbfa.jpg"
    />
    <div className="text-group">

    <FormLayout>
      <FormLayout.Group>
        <div className="individual-text">
          <TextField type="text" label="Kart Ad Soyadı" value={kartAdSoyad} onChange={handleKartIsimChange} />
        </div>
        <div className="individual-text">
          <TextField type="text" label="Kart Numarası" value={kartNo} onChange={handleKartNoChange} />
        </div>
      </FormLayout.Group>
    </FormLayout>
    <FormLayout>
    <FormLayout.Group>

    <div className="select-group">
      <div className="select-content-left">
        <Select
             label="Ay"
             options={ay}
             onChange={handleMonthChange}
             value={selecteday}
        />
      </div>
    <div className="select-content-mid">
      <Select
           label="Yıl"
           options={yil}
           onChange={handleYearChange}
           value={selectedYil}
      />
    </div>

    <div className="select-content-right">
      <TextField type="text" label="CVV" value={cvv}  onChange={handleCvvChange} />
    </div>


    </div>



    </FormLayout.Group>
    </FormLayout>
    </div>

   <div className="radio-frame">
    <Card>
     <div className="radio-group">
      <div className="radio-content-left">
        <RadioButton
        label="Peşin"
        id="1"
        name="accounts"
        checked = {radioVal === '1'}
        onChange={handleRadioChange}
        />
        </div>
        <div className="radio-content-mid">
        120.00 TL
        </div>
        <div className="radio-content-right">
        120 x 1
        </div>
        </div>

        <div className="radio-group">
         <div className="radio-content-left">
           <RadioButton
           label="2 Taksit"
           id="2"
           name="accounts"
           checked = {radioVal === '2'}
           onChange={handleRadioChange}
           />
           </div>
           <div className="radio-content-mid">
           124.00 TL
           </div>
           <div className="radio-content-right">
           62 x 2
           </div>
           </div>

           <div className="radio-group">
            <div className="radio-content-left">
              <RadioButton
              label="3 Taksit"
              id="3"
              name="accounts"
              checked={radioVal==='3'}
              onChange={handleRadioChange}
              />
              </div>
              <div className="radio-content-mid">
              128.00 TL
              </div>
              <div className="radio-content-right">
              42.66 x 3
              </div>
              </div>





                            <div className="radio-group">
                             <div className="radio-content-left">
                               <RadioButton
                               label="4 Taksit"
                               id="4"
                               name="accounts"
                               checked={radioVal === '4'}
                               onChange={handleRadioChange}
                               />
                               </div>
                               <div className="radio-content-mid">

                               </div>
                               <div className="radio-content-right">

                               </div>
                               </div>

                               <div className="radio-group">
                                <div className="radio-content-left">
                                  <RadioButton
                                  label="5 Taksit"
                                  id="5"
                                  name="accounts"
                                  checked={radioVal === '5'}
                                  onChange={handleRadioChange}
                                  />
                                  </div>
                                  <div className="radio-content-mid">

                                  </div>
                                  <div className="radio-content-right">

                                  </div>
                                  </div>


                                  <div className="radio-group">
                                   <div className="radio-content-left">
                                     <RadioButton
                                     label="6 Taksit"
                                     id="6"
                                     name="accounts"
                                     checked={radioVal === '6'}
                                     onChange={handleRadioChange}
                                     />
                                     </div>
                                     <div className="radio-content-mid">

                                     </div>
                                     <div className="radio-content-right">

                                     </div>
                                     </div>


                                     <div className="radio-group">
                                      <div className="radio-content-left">
                                        <RadioButton
                                        label="7 Taksit"
                                        id="7"
                                        name="accounts"
                                        checked={radioVal === '7'}
                                        onChange={handleRadioChange}
                                        />
                                        </div>
                                        <div className="radio-content-mid">

                                        </div>
                                        <div className="radio-content-right">

                                        </div>
                                        </div>


                                        <div className="radio-group">
                                         <div className="radio-content-left">
                                           <RadioButton
                                           label="8 Taksit"
                                           id="8"
                                           name="accounts"
                                           checked={radioVal === '8'}
                                           onChange={handleRadioChange}
                                           />
                                           </div>
                                           <div className="radio-content-mid">

                                           </div>
                                           <div className="radio-content-right">

                                           </div>
                                           </div>

                                           <div className="radio-group">
                                            <div className="radio-content-left">
                                              <RadioButton
                                              label="9 Taksit"
                                              id="9"
                                              name="accounts"
                                              checked={radioVal === '9'}
                                              onChange={handleRadioChange}
                                              />
                                              </div>
                                              <div className="radio-content-mid">

                                              </div>
                                              <div className="radio-content-right">

                                              </div>
                                              </div>

                                              <div className="radio-group">
                                               <div className="radio-content-left">
                                                 <RadioButton
                                                 label="10 Taksit"
                                                 id="10"
                                                 name="accounts"
                                                 checked={radioVal === '10'}
                                                 onChange={handleRadioChange}
                                                 />
                                                 </div>
                                                 <div className="radio-content-mid">

                                                 </div>
                                                 <div className="radio-content-right">

                                                 </div>
                                                 </div>


                                                 <div className="radio-group">
                                                  <div className="radio-content-left">
                                                    <RadioButton
                                                    label="11 Taksit"
                                                    id="11"
                                                    name="accounts"
                                                    checked={radioVal === '11'}
                                                    onChange={handleRadioChange}
                                                    />
                                                    </div>
                                                    <div className="radio-content-mid">

                                                    </div>
                                                    <div className="radio-content-right">

                                                    </div>
                                                    </div>

                                                    <div className="radio-group">
                                                     <div className="radio-content-left">
                                                       <RadioButton
                                                       label="12 Taksit"
                                                       id="12"
                                                       name="accounts"
                                                       checked={radioVal === '12'}
                                                       onChange={handleRadioChange}
                                                       />
                                                       </div>
                                                       <div className="radio-content-mid">

                                                       </div>
                                                       <div className="radio-content-right">

                                                       </div>
                                                       </div>

    </Card>
    </div>
    <div className="payment-board">
    <SettingToggle
          action={{
            content: contentStatus,
            onAction: () => alert("On Action"),
          }}
          enabled={active}
        >
          Sipariş Toplamı: <TextStyle variation="strong">{textStatus}</TextStyle>.
        </SettingToggle>
        </div>

        <div className="store-link">
        <Link url="https://pax-test-store-1.myshopify.com/" external>
          Ödemeden vazgeç mağazaya geri dön.
        </Link>
        </div>
    </Form>
    </div>
    </Card>
    </div>

  )
}

export default Payment;

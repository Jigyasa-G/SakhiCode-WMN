import React from 'react'
import GooglePayButton from '@google-pay/button-react'


const Sponsers = () => {
  return (
    <div id='sponsors:flex' style={{backgroundColor: "#E5F2FF"}} >
      <h1 className="font-bold text-center text-5xl p-8" style={{color:'#071E22'}}>Donate for good</h1>
      <div className='lg:flex'>
        <div style={{backgroundColor: "#000",display: "block", margin: "0 auto"}}>
        <GooglePayButton
        environment='TEST'
        buttonSizeMode="fill"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods:[
            {
              type: 'CARD',
              parameters:{
                allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification:{
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId : 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo:{
            merchantId: '17613812255336763067',
            merchantName: 'Demo Only'
          },
          transactionInfo:{
            totalPriceStatus:'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '100',
            currencyCode: 'USD',
            countryCode: 'US'
          }, 
        }}
        onLoadPaymentData={paymentData =>{
          console.log('TODO:send order to server', paymentData.paymentMethodData);
          // history.push('/confirm');
        }}
        />
        </div>
      </div>
      <br/>
      <div>
      <p style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>OR<br/><br/></p>
      <p style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>Scan the QR </p>
      </div>
      <br/>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
        <br/>     
      <div className='lg:flex' style={{display: "block", margin: "50 auto"}}>
        <img src="https://myonlinevipani.com/wp-content/uploads/2020/11/My-Online-Vipani-Google-Pay-QR-Code-300x300.jpg"></img>
      </div>
      </div>
      <br/>
    </div>
  ); 
}

export default Sponsers;
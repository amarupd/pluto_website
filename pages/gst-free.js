// import React, { useState } from "react";
// import { baseUrl, pageId } from "../config";
// import axios from "axios";

// function Legality({ data }) {
//   const [amount, setAmount] = useState(100.0);
//   const [depositAmount, setDepositAmount] = useState(78.12);
//   const [gstAmount, setGstAmount] = useState(21.88);
//   const [discountPoints, setDiscountPoints] = useState(21.88);
//   const [finalAmount, setFinalAmount] = useState(100);

//   const calculate = () => {
//     const amountValue = parseFloat(amount);
//     const newDepositAmount = amountValue * 0.7812;
//     const newGstAmount = amountValue * 0.2188;
//     const newDiscountPoints = newDepositAmount * 0.28;
//     const newFinalAmount = Math.round(newDepositAmount + newDiscountPoints);

//     setDepositAmount(newDepositAmount.toFixed(2));
//     setGstAmount(newGstAmount.toFixed(2));
//     setDiscountPoints(newDiscountPoints.toFixed(2));
//     setFinalAmount(newFinalAmount);
//   };

//   return (
//     <main>
//       <section className='inner_hero_sec padding-top padding-bottom'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-md-12'>
//               <div className='heading'>
//                 <h1>MyMaster11 GST Free</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className='about-sec padding-top padding-bottom'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-md-12'>
//               <div className='heading'>
//                 <h2>
//                   <span>MyMaster11 GST Free</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-lg-8 col-md-12 api-response'>
//               <div className='content'>
//                 {data && <div dangerouslySetInnerHTML={{ __html: data }} />}
//               </div>
//             </div>
//             <div className='col-lg-4 col-md-12'>
//               <section className='deposit-summary'>
//                 <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#2207a9' }}>GST Calculator</h2>
//                 <div className='container'>
//                   <div className='info-text'>
//                     If you add <strong>₹{amount}</strong> to your account, you will get <strong>₹{depositAmount}</strong> as your Deposit Amount (<strong>A</strong>), with the GST on that amount being <strong>₹{gstAmount}</strong> (28% of ₹{depositAmount}).
//                     <br /><br />
//                     However, you will additionally receive Discount wallet money (<strong>B</strong>) worth 28% of your Deposit Amount, worth <strong>₹{discountPoints}</strong>.
//                   </div>
//                   <div className='amount-input'>
//                     <br></br>
//                     <label htmlFor="amount">Enter Amount:</label>
//                     <input
//                       type="number"
//                       id="amount"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                     />
//                   </div>
//                   <div className="calculate-button">
//                     <button onClick={calculate}>Calculate</button>
//                   </div>
//                   <div className='summary'>
//                     <div>
//                       <span>Deposit Amount (excl. Govt. Tax) <strong>A</strong></span>
//                       <span id="depositAmount">₹{depositAmount}</span>
//                     </div>
//                     <div>
//                       <span>Govt. Tax (28% GST)</span>
//                       <span id="gstAmount">₹{gstAmount}</span>
//                     </div>
//                     <div className='total'>
//                       <span>Total</span>
//                       <span id="totalAmount">₹{amount}</span>
//                     </div>
//                     <div className='points'>
//                       <span>Discount Wallet B</span>
//                       <span id="discountPoints">₹{discountPoints}</span>
//                     </div>
//                     <div className='total'>
//                       <span>Current Balance <strong>(A + B)</strong></span>
//                       <span id="finalAmount">₹{finalAmount}</span>
//                     </div>
//                   </div>
//                   <div className='footer-text'>
//                     You can use these Discount wallet money to <strong>join contests</strong>.
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Legality;

// export async function getStaticProps(context) {
//   const id = pageId.GstFree;
//   const response = await axios.get(`${baseUrl}/slug/${id}`);

//   if (response.data.status) {
//     return {
//       props: {
//         data: response.data.data,
//       },
//       revalidate: 10,
//     };
//   }

//   return {
//     props: {
//       data: false,
//     },
//     revalidate: 10,
//   };
// }


import React, { useState, useEffect } from "react";
import { baseUrl, pageId } from "../config";
import axios from "axios";
import Head from "next/head";
function Legality({ data }) {
  const [amount, setAmount] = useState(100.0);
  const [depositAmount, setDepositAmount] = useState(78.12);
  const [gstAmount, setGstAmount] = useState(21.88);
  const [discountPoints, setDiscountPoints] = useState(21.88);
  const [finalAmount, setFinalAmount] = useState(100);

  // Function to perform the calculation
  const calculate = (amountValue) => {
    const newDepositAmount = amountValue * 0.7812;
    const newGstAmount = amountValue * 0.2188;
    const newDiscountPoints = newDepositAmount * 0.28;
    const newFinalAmount = Math.round(newDepositAmount + newDiscountPoints);

    setDepositAmount(newDepositAmount.toFixed(2));
    setGstAmount(newGstAmount.toFixed(2));
    setDiscountPoints(newDiscountPoints.toFixed(2));
    setFinalAmount(newFinalAmount);
  };

  // Effect to run calculation whenever amount changes
  useEffect(() => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      calculate(amountValue);
    }
  }, [amount]);

  return (
    <main>
      <Head>
        <link rel="canonical" href="https://www.mymaster11.com/gst-free" /> {/* Set your canonical URL */}
      </Head>
      <section className='inner_hero_sec padding-top padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <h1>MyMaster11 GST Free</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-sec padding-top padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <h2>
                  <span>MyMaster11 GST Free</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-12 api-response'>
              <div className='content'>
                {data && <div dangerouslySetInnerHTML={{ __html: data }} />}
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <section className='deposit-summary'>
                <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#2207a9' }}>GST Calculator</h2>
                <div className='container'>
                  <div className='info-text'>
                    If you add <strong>₹{amount}</strong> to your account, you will get <strong>₹{depositAmount}</strong> as your Deposit Amount (<strong>A</strong>), with the GST on that amount being <strong>₹{gstAmount}</strong> (28% of ₹{depositAmount}).
                    <br /><br />
                    However, you will additionally receive Discount wallet money (<strong>B</strong>) worth 28% of your Deposit Amount, worth <strong>₹{discountPoints}</strong>.
                  </div>
                  <div className='amount-input'>
                    <label htmlFor="amount">Enter Amount:</label>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className='summary'>
                    <div>
                      <span>Deposit Amount (excl. Govt. Tax) <strong>A</strong></span>
                      <span id="depositAmount">₹{depositAmount}</span>
                    </div>
                    <div>
                      <span>Govt. Tax (28% GST)</span>
                      <span id="gstAmount">₹{gstAmount}</span>
                    </div>
                    <div className='total'>
                      <span>Total</span>
                      <span id="totalAmount">₹{amount}</span>
                    </div>
                    <div className='points'>
                      <span>Discount Wallet B</span>
                      <span id="discountPoints">₹{discountPoints}</span>
                    </div>
                    <div className='total'>
                      <span>Current Balance <strong>(A + B)</strong></span>
                      <span id="finalAmount">₹{finalAmount}</span>
                    </div>
                  </div>
                  <div className='footer-text'>
                    You can use these Discount wallet money to <strong>join contests</strong>.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Legality;

export async function getStaticProps(context) {
  const id = pageId.GstFree;
  const response = await axios.get(`${baseUrl}/slug/${id}`);

  if (response.data.status) {
    return {
      props: {
        data: response.data.data,
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      data: false,
    },
    revalidate: 10,
  };
}

import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black-100">
      <head>
        <title>Competifit</title>
      </head>

      <nav className="bg-black shadow-lg w-full fixed top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-white">
                  <span className="font-bold">Competifit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center h-screen w-full mt-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Competifit</h1>
          <p className="mt-2 text-gray-400">
            This text is centered both horizontally and vertically.
          </p>
          

          <div id="mc_embed_shell">
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    rel="stylesheet"
    type="text/css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}\n        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
    }}
  />
  <div id="mc_embed_signup">
    <form
      action="https://gmail.us22.list-manage.com/subscribe/post?u=e2ba83b99920e4973fa08d29d&id=a864448421&f_id=0026cce1f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        <h2 className="text-black">Subscribe</h2>
        <div className="indicates-required text-black">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group text-black">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required=""
            defaultValue=""
          />
        </div>
        <div className="mc-field-group text-black">
          <label htmlFor="mce-FNAME">First Name </label>
          <input
            type="text"
            name="FNAME"
            className=" text"
            id="mce-FNAME"
            defaultValue=""
          />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-LNAME">Last Name </label>
          <input
            type="text"
            name="LNAME"
            className=" text"
            id="mce-LNAME"
            defaultValue=""
          />
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px" }}
        >
          /* real people should not fill this in and expect good things - do not
          remove this or risk form bot signups */
          <input
            type="text"
            name="b_e2ba83b99920e4973fa08d29d_a864448421"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              defaultValue="Subscribe"
            />
            <p style={{ margin: "0px auto" }}>
              <a
                href="http://eepurl.com/iTcYiY"
                title="Mailchimp - email marketing made easy and fun"
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "transparent",
                    borderRadius: 4
                  }}
                >
                  <img
                    className="refferal_badge"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    style={{
                      width: 220,
                      height: 40,
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>






          
        </div>
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <head>
//         <title>Competifit</title>
//       </head>


//       <body className="bg-blak-100">
//         <nav className="bg-black shadow-lg">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="flex justify-between">
//               <div className="flex space-x-4">
//                 <div>
//                   <a
//                     href="#"
//                     className="flex items-center py-5 px-2 text-white-700"
//                   >
//                     <span className="font-bold">Competifit</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//         {/* <div className="max-w-6xl h-dvh mx-auto px-4 py-8">
//           <h1 className="text-7xl text-center h-dvh font-bold text-white-900">
//             Competifit
//           </h1>
          
//         </div> */}
//         <div className="flex justify-center items-center h-screen">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 text-white">
//               Centered Text
//             </h1>
//             <p className="mt-2 text-gray-600">
//               This text is centered both horizontally and vertically.
//             </p>
//           </div>
//         </div>
//       </body>
//     </main>
//   );
// }

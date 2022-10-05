import React from "react";

function ZohoBannerForm() {
  return (
    <div
      id="crmWebToEntityForm"
      class="zcwf_lblLeft crmWebToEntityForm"
      // style={{
      //   backgroundColor: "transparent",
      //   color: "#fff",
      //   // maxWidth: "420px",
      //   maxWidth: "100%",
      //   padding: "0",
      // }}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'> */}
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5489955000000387530"
        method="POST"
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5489955000000387530()'
        accept-charset="UTF-8"
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="1c249094b26131c6030d1dc15eb0f8b131bbc215e36704c57ffcf00ea6245706"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="176ef3f28e27dc2512a798a5d9c17dee275549648ee905121b9ad87506f984af"
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;offplan.blackoak-re.com&#x2f;thankyou.html"
        />

        <div class="zcwf_title" style={{ maxWidth: "600px", color: "#FFFFFF" }}>
          Get in touch with us
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "Tahoma" }}
          >
            <label for="First_Name">First Name</label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              maxlength="40"
            ></input>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "Tahoma" }}
          >
            <label for="Last_Name">
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              maxlength="80"
            ></input>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "Tahoma" }}
          >
            <label for="Lead_Source">Lead Source</label>
          </div>
          <div class="zcwf_col_fld">
            <select
              class="zcwf_col_fld_slt"
              id="Lead_Source"
              name="Lead Source"
            >
              <option value="-None-">-None-</option>
              <option value="Advertisement">Advertisement</option>
              <option
                selected
                value="Creek&#x20;Vista&#x20;Heights&#x20;Landing&#x20;Page"
              >
                Creek Vista Heights Landing Page
              </option>
              <option value="Cold&#x20;Call">Cold Call</option>
              <option value="Employee&#x20;Referral">Employee Referral</option>
              <option value="External&#x20;Referral">External Referral</option>
              <option value="Online&#x20;Store">Online Store</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Google&#x2b;">Google&#x2b;</option>
              <option value="Partner">Partner</option>
              <option value="Public&#x20;Relations">Public Relations</option>
              <option value="Sales&#x20;Email&#x20;Alias">
                Sales Email Alias
              </option>
              <option value="Seminar&#x20;Partner">Seminar Partner</option>
              <option value="Internal&#x20;Seminar">Internal Seminar</option>
              <option value="Trade&#x20;Show">Trade Show</option>
              <option value="Web&#x20;Download">Web Download</option>
              <option value="Web&#x20;Research">Web Research</option>
              <option value="Chat">Chat</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "Tahoma" }}
          >
            <label for="Mobile">
              Mobile<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Mobile" name="Mobile" maxlength="30"></input>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "Tahoma" }}
          >
            <label for="Email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              ftype="email"
              id="Email"
              name="Email"
              maxlength="100"
            ></input>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"></div>
          <div class="zcwf_col_fld">
            <input
              type="submit"
              id="formsubmit"
              class="formsubmit zcwf_button"
              value="ENQUIRE&#x20;NOW"
              title="ENQUIRE&#x20;NOW"
            />
            <input
              type="reset"
              class="zcwf_button"
              name="reset"
              value="Reset"
              title="Reset"
            />
          </div>
        </div>
      </form>
    </div>

    // <div
    //   id="crmWebToEntityForm"
    //   class="zcwf_lblLeft crmWebToEntityForm"
    // style={{
    //   backgroundColor: "transparent",
    //   color: "#fff",
    //   // maxWidth: "420px",
    //   maxWidth: "100%",
    //   padding: "0",
    // }}
    // >
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   {/* <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'> */}
    //   <form
    //     action="https://crm.zoho.com/crm/WebToLeadForm"
    //     name="WebToLeads5489955000000387530"
    //     method="POST"
    //     onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5489955000000387530()'
    //     accept-charset="UTF-8"
    //   >
    //     <input
    //       type="text"
    //       style={{ display: "none" }}
    //       name="xnQsjsdp"
    //       value="1c249094b26131c6030d1dc15eb0f8b131bbc215e36704c57ffcf00ea6245706"
    //     />
    //     <input type="hidden" name="zc_gad" id="zc_gad" value="" />
    //     <input
    //       type="text"
    //       style={{ display: "none" }}
    //       name="xmIwtLD"
    //       value="176ef3f28e27dc2512a798a5d9c17dee275549648ee905121b9ad87506f984af"
    //     />
    //     <input
    //       type="text"
    //       style={{ display: "none" }}
    //       name="actionType"
    //       value="TGVhZHM="
    //     />
    //     <input
    //       type="text"
    //       style={{ display: "none" }}
    //       name="returnURL"
    //       value="https://offplan.blackoak-re.com/thankyou.html"
    //     />
    //     <div
    //       className="zcwf_title"
    //       style={{ maxWidth: "600px", color: "#fff", display: "none" }}
    //     >
    //       Contact Us
    //     </div>
    //     <div className="form-row">
    //       <div className="form-group col-md-6 colspace">
    //         <div className="zcwf_row">
    //           <div
    //             className="zcwf_col_lab"
    //             style={{
    //               fontSize: "14px",
    //               fontFamily: "'Be Vietnam Regular', sans-serif",
    //             }}
    //           >
    //             <label htmlFor="First_Name">
    //               First Name <span style={{ color: "red" }}>*</span>
    //             </label>
    //           </div>
    //           <div className="zcwf_col_fld">
    //             <input
    //               type="text"
    //               id="First_Name"
    //               name="First Name"
    //               maxLength="40"
    //               required
    //             />
    //             <div className="zcwf_col_help"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="form-group col-md-6">
    //         <div className="zcwf_row">
    //           <div
    //             className="zcwf_col_lab"
    //             style={{
    //               fontSize: "14px",
    //               fontFamily: "'Be Vietnam Regular', sans-serif",
    //             }}
    //           >
    //             <label htmlFor="Last_Name">
    //               Last Name <span style={{ color: "red" }}>*</span>
    //             </label>
    //           </div>
    //           <div className="zcwf_col_fld">
    //             <input
    //               type="text"
    //               id="Last_Name"
    //               name="Last Name"
    //               maxLength="80"
    //               required
    //             />
    //             <div className="zcwf_col_help"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="form-group col-md-6 colspace">
    //         <div className="zcwf_row">
    //           <div
    //             className="zcwf_col_lab"
    //             style={{
    //               fontSize: "14px",
    //               fontFamily: "'Be Vietnam Regular', sans-serif",
    //             }}
    //           >
    //             <label htmlFor="Mobile">
    //               Mobile <span style={{ color: "red" }}>*</span>
    //             </label>
    //           </div>
    //           <div className="zcwf_col_fld">
    //             <input
    //               type="text"
    //               // name="phone"
    //               value="+971"
    //               readOnly
    //               style={{ width: "20%" }}
    //             />
    //             <input
    //               type="text"
    //               id="Mobile"
    //               name="Mobile"
    //               maxLength="9"
    //               minLength="9"
    //               required
    //               placeholder="57xxxxxxx"
    //               onKeyPress={(event) => {
    //                 if (!/[0-9]/.test(event.key)) {
    //                   event.preventDefault();
    //                 }
    //               }}
    //               style={{ width: "80%" }}
    //             />
    //             <div className="zcwf_col_help"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="form-group col-md-6">
    //         <div className="zcwf_row">
    //           <div
    //             className="zcwf_col_lab"
    //             style={{
    //               fontSize: "14px",
    //               fontFamily: "'Be Vietnam Regular', sans-serif",
    //             }}
    //           >
    //             <label htmlFor="Email">
    //               Email <span style={{ color: "red" }}>*</span>
    //             </label>
    //           </div>
    //           <div className="zcwf_col_fld">
    //             <input
    //               type="email"
    //               // ftype="email"
    //               id="Email"
    //               name="Email"
    //               maxLength="100"
    //               required
    //             />
    //             <div className="zcwf_col_help"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="zcwf_row wfrm_fld_dpNn">
    //       <div
    //         className="zcwf_col_lab"
    //         style={{
    //           fontSize: "14px",
    //           fontFamily: "'Be Vietnam Regular', sans-serif",
    //         }}
    //       >
    //         <label htmlFor="Lead_Source">Lead Source</label>
    //       </div>
    //       <div className="zcwf_col_fld">
    //         <select
    //           className="zcwf_col_fld_slt"
    //           id="Lead_Source"
    //           name="Lead Source"
    //           value="Creek&#x20;Vista&#x20;Heights&#x20;Landing&#x20;Page"
    //         >
    //           <option value="-None-">-None-</option>
    //           <option value="Advertisement">Advertisement</option>
    //           <option value="Creek&#x20;Vista&#x20;Heights&#x20;Landing&#x20;Page">
    //             Creek Vista Heights Landing Page
    //           </option>
    //           <option value="Cold&#x20;Call">Cold Call</option>
    //           <option value="Employee&#x20;Referral">Employee Referral</option>
    //           <option value="External&#x20;Referral">External Referral</option>
    //           <option value="Online&#x20;Store">Online Store</option>
    //           <option value="Twitter">Twitter</option>
    //           <option value="Facebook">Facebook</option>
    //           <option value="Google&#x2b;">Google&#x2b;</option>
    //           <option value="Partner">Partner</option>
    //           <option value="Public&#x20;Relations">Public Relations</option>
    //           <option value="Sales&#x20;Email&#x20;Alias">
    //             Sales Email Alias
    //           </option>
    //           <option value="Seminar&#x20;Partner">Seminar Partner</option>
    //           <option value="Internal&#x20;Seminar">Internal Seminar</option>
    //           <option value="Trade&#x20;Show">Trade Show</option>
    //           <option value="Web&#x20;Download">Web Download</option>
    //           <option value="Web&#x20;Research">Web Research</option>
    //           <option value="Chat">Chat</option>
    //         </select>
    //         <div className="zcwf_col_help"></div>
    //       </div>
    //     </div>

    //     <div className="zcwf_row">
    //       <div className="zcwf_col_lab"></div>
    //       <div className="zcwf_col_fld">
    //         <input
    //           type="submit"
    //           id="formsubmit"
    //           className="formsubmit zcwf_button"
    //           value="ENQUIRE&#x20;NOW"
    //           title="ENQUIRE&#x20;NOW"
    //         />
    //         <input
    //           type="reset"
    //           className="zcwf_button"
    //           name="reset"
    //           value="Reset"
    //           title="Reset"
    //         />
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}
export default ZohoBannerForm;

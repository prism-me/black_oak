import React from "react";

function ZohoBannerForm() {
  return (
    <>
      <div
        id="crmWebToEntityForm"
        class="zcwf_lblLeft crmWebToEntityForm"
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          // maxWidth: "420px",
          maxWidth: "100%",
          padding: "0",
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'> */}
        <form
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name={`WebToLeads5489955000000387530`}
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
            value="https://black-oak.prismcloudhosting.com/thankyou.html"
          />

          <div
            class="zcwf_title"
            style={{ maxWidth: "600px", color: "#fff", display: "none" }}
          >
            Contact Us
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 colspace">
              <div class="zcwf_row">
                <div
                  class="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "'Arial'" }}
                >
                  <label for="First_Name">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div class="zcwf_col_fld">
                  <input
                    type="text"
                    id="First_Name"
                    name="First Name"
                    maxlength="40"
                    required
                  ></input>
                  <div class="zcwf_col_help"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div class="zcwf_row">
                <div
                  class="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "'Arial'" }}
                >
                  <label for="Last_Name">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div class="zcwf_col_fld">
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxlength="80"
                    required
                  ></input>
                  <div class="zcwf_col_help"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6 colspace">
              <div class="zcwf_row">
                <div
                  class="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "'Arial'" }}
                >
                  <label for="Country">
                    Country <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div class="zcwf_col_fld">
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    maxlength="100"
                    required
                  ></input>
                  <div class="zcwf_col_help"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div class="zcwf_row">
                <div
                  class="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "'Arial'" }}
                >
                  <label for="Mobile">
                    Mobile <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div class="zcwf_col_fld">
                  <input
                    type="text"
                    id="Mobile"
                    name="Mobile"
                    maxlength="30"
                    required
                  ></input>
                  <div class="zcwf_col_help"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6 colspace">
              <div class="zcwf_row">
                <div
                  class="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "'Arial'" }}
                >
                  <label for="Email">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div class="zcwf_col_fld">
                  <input
                    type="text"
                    ftype="email"
                    id="Email"
                    name="Email"
                    maxlength="100"
                    required
                  ></input>
                  <div class="zcwf_col_help"></div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ZohoBannerForm;

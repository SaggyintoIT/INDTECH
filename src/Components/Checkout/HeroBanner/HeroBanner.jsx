import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls
import { ToastContainer, toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import paypalLogo from "../../../assets/images/paypal.svg";
import visaLogo from "../../../assets/images/visa.svg";
import mastercardLogo from "../../../assets/images/mastercard.svg";
import gpayLogo from "../../../assets/images/gpay.svg";

const Checkout = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    flatNo: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    mobileNumber: "",
    saveAddressAs: "",
    billingAddressSame: true,
    shippingAddress: {
      firstName: "",
      lastName: "",
      email: "",
      flatNo: "",
      streetAddress: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      mobileNumber: "",
      saveAddressAs: "",
    },
    paymentMethod: "",
    orderSummary: {
      cartSubtotal: 0,
      discount: 0,
      taxes: 0,
      orderTotal: 0,
      rewardPoints: 0,
      wallet: 0,
      couponDiscount: 0,
      total: 0,
    },
  });

  // Fetch order summary data from the backend
  useEffect(() => {
    const fetchOrderSummary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/checkoutRoutes/checkouts"
        );
        console.log("API Response:", response.data);

        // Access the first item in the data array
        const firstCheckout = response.data.data[0];

        // Update the state with the orderSummary from the first item
        setFormData((prevData) => ({
          ...prevData,
          orderSummary: firstCheckout.orderSummary,
        }));
      } catch (error) {
        console.error("Error fetching order summary:", error);
        toast.error("Failed to fetch order summary. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };

    fetchOrderSummary();
  }, []);
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle shipping address input changes
  const handleShippingInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      shippingAddress: {
        ...formData.shippingAddress,
        [name]: value,
      },
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await axios.post(
        "http://localhost:5000/api/checkoutRoutes/checkouts",
        formData
      );
      console.log("Checkout data saved:", response.data);

      // Show success notification
      toast.success("Order placed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error saving checkout data:", error);

      // Show error notification
      toast.error("Failed to place order. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="banner bg-dark pt-4">
        <div className="text-center h-450 text-white pt-70 iphoneh">
          <h2 className="text-white fs-50 fw-bold">Checkout</h2>
        </div>
      </section>

      {/* Billing Details Section */}
      <section className="bodypx lightgraybg pb-5 pt-0">
        <div className="container-fluid">
          <div className="row">
            {/* Billing Details Form */}
            <div className="col-sm-6 outer-col-2">
              <div className="form-box shadowone overflow checkoutboxp">
                <div className="title mb-20">
                  <span className="fn-24 fw-bold mb-4">Billing Details</span>
                  <form className="ckeckoutform mt-3" onSubmit={handleSubmit}>
                    <div className="row jumbotron box8">
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">
                          First name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          id="name-f"
                          placeholder=""
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-l">
                          Last name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          id="name-l"
                          placeholder=""
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="email">
                          Email address<span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-1">
                          Flat No./ Plot No./ Company Name
                          <span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="flatNo"
                          id="address-1"
                          placeholder=""
                          value={formData.flatNo}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-2">
                          Street address<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="streetAddress"
                          id="address-2"
                          placeholder=""
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="Country">
                          Country / Region<span className="text-red">*</span>
                        </label>
                        <select
                          className="form-control custom-select browser-default"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Åland Islands">Åland Islands</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">
                            Brunei Darussalam
                          </option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos (Keeling) Islands">
                            Cocos (Keeling) Islands
                          </option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo, The Democratic Republic of The">
                            Congo, The Democratic Republic of The
                          </option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote D'ivoire">Cote D'ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands (Malvinas)">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Territories">
                            French Southern Territories
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guernsey">Guernsey</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-bissau">Guinea-bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and Mcdonald Islands">
                            Heard Island and Mcdonald Islands
                          </option>
                          <option value="Holy See (Vatican City State)">
                            Holy See (Vatican City State)
                          </option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran, Islamic Republic of">
                            Iran, Islamic Republic of
                          </option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jersey">Jersey</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea, Democratic People's Republic of">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="Korea, Republic of">
                            Korea, Republic of
                          </option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Lao People's Democratic Republic">
                            Lao People's Democratic Republic
                          </option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libyan Arab Jamahiriya">
                            Libyan Arab Jamahiriya
                          </option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macao">Macao</option>
                          <option value="Macedonia, The Former Yugoslav Republic of">
                            Macedonia, The Former Yugoslav Republic of
                          </option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia, Federated States of">
                            Micronesia, Federated States of
                          </option>
                          <option value="Moldova, Republic of">
                            Moldova, Republic of
                          </option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">
                            Netherlands Antilles
                          </option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Northern Mariana Islands">
                            Northern Mariana Islands
                          </option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestinian Territory, Occupied">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russian Federation">
                            Russian Federation
                          </option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Pierre and Miquelon">
                            Saint Pierre and Miquelon
                          </option>
                          <option value="Saint Vincent and The Grenadines">
                            Saint Vincent and The Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia and The South Sandwich Islands">
                            South Georgia and The South Sandwich Islands
                          </option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">
                            Svalbard and Jan Mayen
                          </option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syrian Arab Republic">
                            Syrian Arab Republic
                          </option>
                          <option value="Taiwan, Province of China">
                            Taiwan, Province of China
                          </option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania, United Republic of">
                            Tanzania, United Republic of
                          </option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-leste">Timor-leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">
                            United States Minor Outlying Islands
                          </option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Viet Nam">Viet Nam</option>
                          <option value="Virgin Islands, British">
                            Virgin Islands, British
                          </option>
                          <option value="Virgin Islands, U.S.">
                            Virgin Islands, U.S.
                          </option>
                          <option value="Wallis and Futuna">
                            Wallis and Futuna
                          </option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="State">
                          State / Province<span className="text-red">*</span>
                        </label>
                        <select
                          className="form-control custom-select browser-default"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Afghanistan">State</option>
                          <option value="Åland Islands">Åland Islands</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="City">
                          Town / City<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="City"
                          placeholder=""
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="zip">
                          Zip/Postal Code<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          id="zip"
                          placeholder=""
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="mobile">
                          Mobile Number<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control ps-3 bornone"
                          id="mobile_code"
                          placeholder=""
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="Address">
                          Save Address as<span className="text-red">*</span>
                        </label>
                        <select
                          id="Address"
                          className="form-control browser-default custom-select"
                          name="saveAddressAs"
                          value={formData.saveAddressAs}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            name="billingAddressSame"
                            checked={formData.billingAddressSame}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Billing address same as address
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Shipping Address Form */}
            <div className="col-sm-6 outer-col-2">
              <div className="form-box shadowone overflow checkoutboxp ipadmtop">
                <div className="title mb-20">
                  <span className="fn-24 fw-bold mb-4">
                    Ship to different address?
                  </span>
                  <form className="ckeckoutform mt-3">
                    <div className="row jumbotron box8">
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">
                          First name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          id="name-f"
                          placeholder=""
                          value={formData.shippingAddress.firstName}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-l">
                          Last name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          id="name-l"
                          placeholder=""
                          value={formData.shippingAddress.lastName}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="email">
                          Email address<span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                          value={formData.shippingAddress.email}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-1">
                          Flat No./ Plot No./ Company Name
                          <span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="flatNo"
                          id="address-1"
                          placeholder=""
                          value={formData.shippingAddress.flatNo}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-2">
                          Street address<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="streetAddress"
                          id="address-2"
                          placeholder=""
                          value={formData.shippingAddress.streetAddress}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="Country">
                          Country / Region<span className="text-red">*</span>
                        </label>
                        <select
                          className="form-control custom-select browser-default"
                          name="country"
                          value={formData.shippingAddress.country}
                          onChange={handleShippingInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Åland Islands">Åland Islands</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">
                            Brunei Darussalam
                          </option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos (Keeling) Islands">
                            Cocos (Keeling) Islands
                          </option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo, The Democratic Republic of The">
                            Congo, The Democratic Republic of The
                          </option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote D'ivoire">Cote D'ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands (Malvinas)">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Territories">
                            French Southern Territories
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guernsey">Guernsey</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-bissau">Guinea-bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and Mcdonald Islands">
                            Heard Island and Mcdonald Islands
                          </option>
                          <option value="Holy See (Vatican City State)">
                            Holy See (Vatican City State)
                          </option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran, Islamic Republic of">
                            Iran, Islamic Republic of
                          </option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jersey">Jersey</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea, Democratic People's Republic of">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="Korea, Republic of">
                            Korea, Republic of
                          </option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Lao People's Democratic Republic">
                            Lao People's Democratic Republic
                          </option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libyan Arab Jamahiriya">
                            Libyan Arab Jamahiriya
                          </option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macao">Macao</option>
                          <option value="Macedonia, The Former Yugoslav Republic of">
                            Macedonia, The Former Yugoslav Republic of
                          </option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia, Federated States of">
                            Micronesia, Federated States of
                          </option>
                          <option value="Moldova, Republic of">
                            Moldova, Republic of
                          </option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">
                            Netherlands Antilles
                          </option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Northern Mariana Islands">
                            Northern Mariana Islands
                          </option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestinian Territory, Occupied">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russian Federation">
                            Russian Federation
                          </option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Pierre and Miquelon">
                            Saint Pierre and Miquelon
                          </option>
                          <option value="Saint Vincent and The Grenadines">
                            Saint Vincent and The Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia and The South Sandwich Islands">
                            South Georgia and The South Sandwich Islands
                          </option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">
                            Svalbard and Jan Mayen
                          </option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syrian Arab Republic">
                            Syrian Arab Republic
                          </option>
                          <option value="Taiwan, Province of China">
                            Taiwan, Province of China
                          </option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania, United Republic of">
                            Tanzania, United Republic of
                          </option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-leste">Timor-leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">
                            United States Minor Outlying Islands
                          </option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Viet Nam">Viet Nam</option>
                          <option value="Virgin Islands, British">
                            Virgin Islands, British
                          </option>
                          <option value="Virgin Islands, U.S.">
                            Virgin Islands, U.S.
                          </option>
                          <option value="Wallis and Futuna">
                            Wallis and Futuna
                          </option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="State">
                          State / Province<span className="text-red">*</span>
                        </label>
                        <select
                          className="form-control custom-select browser-default"
                          name="state"
                          value={formData.shippingAddress.state}
                          onChange={handleShippingInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Afghanistan">State</option>
                          <option value="Åland Islands">Åland Islands</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="City">
                          Town / City<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="City"
                          placeholder=""
                          value={formData.shippingAddress.city}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="zip">
                          Zip/Postal Code<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          id="zip"
                          placeholder=""
                          value={formData.shippingAddress.zipCode}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="mobile">
                          Mobile Number<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control ps-3 bornone"
                          id="mobile_code"
                          placeholder=""
                          name="mobileNumber"
                          value={formData.shippingAddress.mobileNumber}
                          onChange={handleShippingInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="Address">
                          Save Address as<span className="text-red">*</span>
                        </label>
                        <select
                          id="Address"
                          className="form-control browser-default custom-select"
                          name="saveAddressAs"
                          value={formData.shippingAddress.saveAddressAs}
                          onChange={handleShippingInputChange}
                          required
                        >
                          <option value="">-Select-</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>
                      <div className="col-sm-12 mt-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            name="billingAddressSame"
                            checked={formData.billingAddressSame}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Billing address same as address
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary and Payment Section */}
      <section className="bodypx lightgraybg py-80 pt-0">
        <div className="container-fluid">
          <div className="row">
            {/* Order Summary */}
            <div className="col-lg-6">
              <div className="form-box shadowone overflow checkoutboxp mt-0 top-0 h-100">
                <div className="w-100 h-100 d-flex flex-column">
                  <span className="fn-24 fw-bold">Order Summary</span>
                  <hr />
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Cart Subtotal</span>{" "}
                    <span className="fw-600">
                      ${formData.orderSummary?.cartSubtotal}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Discount on cart</span>{" "}
                    <span className="text-green fw-600">
                      -${formData.orderSummary?.discount}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Taxes</span>{" "}
                    <span className="fw-600">
                      ${formData.orderSummary?.taxes}
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 pt-2 text-dgray">
                    <span className="fw-600">Order Total</span>{" "}
                    <strong className="text-dark">
                      ${formData.orderSummary?.orderTotal}
                    </strong>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Reward Points</span>{" "}
                    <span className="text-green fw-600">
                      ${formData.orderSummary?.rewardPoints}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Wallet</span>{" "}
                    <span className="text-green fw-600">
                      -${formData.orderSummary?.wallet}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between magintop text-dgray">
                    <span>Coupon Discount (tynr20)</span>{" "}
                    <span className="text-green fw-600">
                      -${formData.orderSummary?.couponDiscount}
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 text-dgray">
                    <span className="fn-24 fw-bold">Total</span>{" "}
                    <span className="text-dark fn-24 fw-bold">
                      ${formData.orderSummary?.total}
                    </span>
                  </div>
                  <button className="btn checkoutbtn w-100 mt-auto py-3">
                    You Save ${formData.orderSummary?.discount} on this order
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <PaymentMethod
              selectedPayment={formData.paymentMethod}
              handlePaymentChange={(paymentType) =>
                setFormData({ ...formData, paymentMethod: paymentType })
              }
              handlePlaceOrder={handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const PaymentMethod = ({
  selectedPayment,
  handlePaymentChange,
  handlePlaceOrder,
}) => {
  return (
    <div className="col-lg-6">
      <div className="form-box shadowone overflow checkoutboxp mt-0 top-0 h-100">
        <div className="accordion" id="accordionPayment">
          <span className="fn-24 fw-bold mb-4">Payment method</span>

          {/* Direct Bank Transfer */}
          <div className="accordion-item mb-3 borderlight rounded8 mt-3">
            <h5 className="h5 px-3 py-3 accordion-header">
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="Directbank1"
                  checked={selectedPayment === "bank"}
                  onChange={() => handlePaymentChange("bank")}
                />
                <label
                  className="form-check-label mb-0 fw-600 fn-16"
                  htmlFor="Directbank1"
                >
                  Direct bank transfer
                </label>
              </div>
            </h5>
            <div
              className={`accordion-body ${
                selectedPayment === "bank" ? "expanded" : ""
              }`}
            >
              <div className="mb-3 text-dgray fs-10 thin-text">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className="accordion-item mb-3 borderlight rounded8 mt-3">
            <h5 className="h5 px-3 py-3 accordion-header">
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment1"
                  checked={selectedPayment === "creditCard"}
                  onChange={() => handlePaymentChange("creditCard")}
                />
                <label
                  className="form-check-label mb-0 fw-600 fn-16"
                  htmlFor="payment1"
                >
                  Credit Card
                </label>
              </div>
            </h5>
            <div
              className={`accordion-body ${
                selectedPayment === "creditCard" ? "expanded" : ""
              }`}
            >
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-control" />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Name on card</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <label className="form-label">Expiry date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <label className="form-label">CVV Code</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PayPal */}
          <div className="accordion-item mb-3 borderlight rounded8">
            <h5 className="h5 px-3 py-2 accordion-header d-flex justify-content-between align-items-center">
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment2"
                  checked={selectedPayment === "paypal"}
                  onChange={() => handlePaymentChange("paypal")}
                />
                <label
                  className="form-check-label mb-0 fw-600 fn-16"
                  htmlFor="payment2"
                >
                  PayPal
                </label>
              </div>
              <span className="rounded-1 logopad">
                <img src={paypalLogo} alt="PayPal" />
              </span>
              <span className="rounded-1 logopad">
                <img src={visaLogo} alt="Visa" />
              </span>
              <span className="rounded-1 logopad">
                <img src={mastercardLogo} alt="Mastercard" />
              </span>
              <span className="rounded-1 logopad">
                <img src={gpayLogo} alt="Google Pay" />
              </span>
            </h5>
            <div
              className={`accordion-body ${
                selectedPayment === "paypal" ? "expanded" : ""
              }`}
            >
              <div className="px-2 col-lg-6 mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" />
              </div>
            </div>
          </div>

          {/* Wish */}
          <div className="accordion-item mb-3 borderlight rounded8">
            <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="wish2"
                  checked={selectedPayment === "wish"}
                  onChange={() => handlePaymentChange("wish")}
                />
                <label
                  className="form-check-label mb-0 fw-600 fn-16"
                  htmlFor="wish2"
                >
                  Wish
                </label>
              </div>
            </h5>
          </div>

          {/* Cash on Delivery */}
          <div className="accordion-item mb-3 borderlight rounded8">
            <h5 className="h5 px-3 py-3 accordion-header d-flex justify-content-between align-items-center">
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="Cashon"
                  checked={selectedPayment === "cash"}
                  onChange={() => handlePaymentChange("cash")}
                />
                <label
                  className="form-check-label mb-0 fw-600 fn-16"
                  htmlFor="Cashon"
                >
                  Cash on delivery
                </label>
              </div>
            </h5>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="btn-darkblack mt-2 mt-xl-3 fw-500 fn-16 text-capitalize"
            onClick={handlePlaceOrder}
          >
            <span>Place Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

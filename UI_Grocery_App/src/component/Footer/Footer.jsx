import React from "react";
import footerBBlogo from "../../assets/images/footer_bb_logo.png";
import Facebook_logo from "../../assets/images/Facebook_logo.jpeg";
function Footer() {
  return (
    <footer className="bg-[#101010]">
      <div className="mx-48 grid grid-cols-3 ">
        <div className="pt-12">
          <div>
            <h4 className=" text-white  text-[14px] font-normal pl-3 ">
              Bigbasket
            </h4>
          </div>
          <ul className="text-white text-[13px] flex flex-col justify-between font-light p-3 space-y-2">
            <li className="hover:underline">
              <a href="./">About us</a>
            </li>
            <li className="hover:underline">
              <a href="./">Become A bigbasket Rider</a>{" "}
            </li>
            <li className="hover:underline">
              <a href="./">In News</a>
            </li>
            <li className="hover:underline">
              <a href="./">Green bigbasket</a>
            </li>
            <li className="hover:underline">
              <a href="./">privacy Policy</a>
            </li>
            <li className="hover:underline">
              <a href="./">Terms and conditions</a>
            </li>
            <li className="hover:underline">
              <a href="./">Careers At bigbasket</a>
            </li>
            <li className="hover:underline">
              <a href="./">bb Instant</a>
            </li>
            <li className="hover:underline">
              <a href="./">bb Daily</a>
            </li>
            <li className="hover:underline">
              <a href="./">bb Blog</a>
            </li>
            <li className="hover:underline">
              <a href="./">bbnow</a>
            </li>
          </ul>
        </div>
        <div className="pt-12">
          <div>
            <h4 className=" text-white  text-[14px] font-normal pl-3 ">Help</h4>
          </div>
          <ul className="text-white text-[13px] flex flex-col justify-between font-light p-3 space-y-2">
            <li className="hover:underline">
              <a href="./">FAQs</a>
            </li>
            <li className="hover:underline">
              <a href="./">Contact Us</a>{" "}
            </li>
            <li className="hover:underline">
              <a href="./">bb Wallet FAQs</a>
            </li>
            <li className="hover:underline">
              <a href="./">bb Wallet T&Cs</a>
            </li>
            <li className="hover:underline">
              <a href="./">Vendor COntact</a>
            </li>
          </ul>
        </div>
        <div className="pt-12">
          <div>
            <img
              src={footerBBlogo}
              className="h-30 w-60"
              alt="big basket logo"
            />
          </div>
          <div></div>
          <div>
            <div>
              <img src={Facebook_logo} className="h-3 w-3 bg-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-48 border-dashed border-y-[1px] ">
        <h4 className=" text-white text-center py-2 text-[14px] font-normal">
          {" "}
          Cities we serve
        </h4>
        <p className="flex flex-wrap items-center justify-cente text-white font-light text-[13px]">
          <span className="mx-2 my-1 text-white">Abohar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Abu Road</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Achampet</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Achrol</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Adampur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Addanki</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Addateegala</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Adilabad</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Adimali</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Adoni</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Adoor</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Afzalpur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Agali</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">AGARTALA</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Agra</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ahmedabad-Gandhinagar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aizawl</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ajeetgarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ajmer</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ajnala</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Akaloor</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Akbarpur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Akbarpur-UP</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aklera</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Akola</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alair</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alakode</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aland</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alappuzha</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aliganj</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aligarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aligarh District</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">ALIPURDUAR</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alirajpur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Allagadda</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Allahabad</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alleppey</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Almora</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">ALNAVAR</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alote</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aluva</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Alwar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amalapuram</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amangal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amanganj</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amarapuram</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amaravathi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amarpatan</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amarwara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ambala</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ambasamudram</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ambuj Nagar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ambur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amethi District</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amiliya</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amla</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amravati</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amreli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amritsar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amritsar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Amroha District</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anand</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anandnagar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anandpur Sahib</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anantapur District</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anantnag</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Andaman and Nicobar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Angul</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Angul</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anjumoorthy</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ankleshwar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ankola</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Annur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anpara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anthiyour</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anuppur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Anupshahar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aonla</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arakkonam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Araku</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arambag</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arani</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Araria</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aravakurichi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arbail</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arimalam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ariyalur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ariyur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arkalgud</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arni</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arni</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arsikere</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Arumbavur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Asansol</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Asaripallam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ashapur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ashok Nagar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Athani</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Atmakur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Atmakur-Nellore</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Atrauli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Attabira</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Attingal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Attur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aurangabad-Bihar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aurangabad-Maharashtra</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Aurangabad-UP</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ausa</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Awadhpuri</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Azamgarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baarah</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Babaleshwar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Babina</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Babua</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bacheli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badagaulipalayam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badagara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badami</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badgam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badgi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badnagar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Badrachalam</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baduria</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bagalkot</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bageshwar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bagha</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bagli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bagodar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bagur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bahadurgarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baheri</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bahraich</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bahugram</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baikunthpur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bailhongal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bairgania</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baisinga</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">
            Baishnabghata-Patuli Township
          </span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baiyyappanahalli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bajpe</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bakaner</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baksar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balaganj</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balaghat</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balaji Nager</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balasore</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balasinor</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baldota</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balendragarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baleshwar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balgal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baliapal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baligubadle</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balisankara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ballabhgarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ballari</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ballia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Ballur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balod</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baloda Bazar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baloda-Bazar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balrampur-Chhattisgarh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balrampur-UP</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balugaon</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Balurghat</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bamhani</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bamangachhi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banahatti</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banaswadi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banda</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bandh</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bandikui</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bandipora</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bangaon</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bangarupalem</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bangiriposi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bangkana</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bankati</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banki</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bankura</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banmankhi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bansberia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bansi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banswada</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Banswara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bantwal</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bapatla</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baran</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barasat</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baraut</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barbigha</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barbil</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bardhaman</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bareilly</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bargi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barkakana</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barmer</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barnala</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barpeta</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Barshi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Baruipur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basar</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basavakalyan</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basavana Bagevadi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basavanagudi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basin Bridge</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basni</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bassi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basti</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basugaon</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Basukinath</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bathalapalli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bathinda</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Battaramulla South</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Battiprolu</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Battili</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bauda</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bauhinia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bawana</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bawani Khera</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bawani Khurd</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bawapur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bayana</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bayarghatta</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bazpur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Beldanga</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belgaum</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belgharia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belihit</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belkhera</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bellampalli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bellary</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belonia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Beltangadi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belvathi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bemetara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Begusarai</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Behror</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Beluval</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Beldanga</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belgaum</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belgharia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belihit</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belkhera</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bellampalli</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bellary</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belonia</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Beltangadi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belur</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Belvathi</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Bemetara</span>
          <span>|</span>
          <span className="mx-2 my-1 text-white">Begusarai</span>
        </p>
      </div>
      <div className="mx-48 mt-4 grid grid-cols-2 pb-6">
        <div className="grid">
          <h4 className=" text-white py-2 text-[14px] font-normal">
            {" "}
            Popular categories
          </h4>
          <div className="grid grid-cols-3 ">
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Sunflower Oils</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Milk</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Organic F&V</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Floor Cleaner</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Frozen Veg Food</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">White Atta</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Health Drinks</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Namkeen</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Other Juices</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Diapers & Wipes</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Ghee</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Flakes</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Eggs</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Leafy Vegitables</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid">
          <h4 className=" text-white py-2 text-[14px] font-normal">
            {" "}
            Popular Brands
          </h4>
          <div className="grid grid-cols-3 ">
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Amul</a>
                </li>
                <li className="hover:underline">
                  <a href="./">RED BULL</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yummiez</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Britannia</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Haldiram's</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Nescafe</a>
                </li>
                <li className="hover:underline">
                  <a href="./">elite cake</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yera</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Wow! Momo</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Ferrero</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">MTR</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Pediasure</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yakult</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Fortune</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Lay's</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-48 mb-4">
        <div className="flex flex-row justify-center ">
          <button className="text-white text-center font-light text-[13px] underline  ">
            Show More +
          </button>
        </div>
      </div>
      <div className=" bg-black ">
        <p className="text-white text-[13px] font-light py-3 pl-[13%]">
          <span>
            Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

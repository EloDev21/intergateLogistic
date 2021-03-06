/*
    /$$$$$                                /$$$$$$                      /$$             /$$    
    |__  $$                               /$$__  $$                    |__/            | $$    
       | $$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  \__/  /$$$$$$$  /$$$$$$  /$$  /$$$$$$  /$$$$$$  
       | $$ |____  $$|  $$  /$$/|____  $$|  $$$$$$  /$$_____/ /$$__  $$| $$ /$$__  $$|_  $$_/  
  /$$  | $$  /$$$$$$$ \  $$/$$/  /$$$$$$$ \____  $$| $$      | $$  \__/| $$| $$  \ $$  | $$    
 | $$  | $$ /$$__  $$  \  $$$/  /$$__  $$ /$$  \ $$| $$      | $$      | $$| $$  | $$  | $$ /$$
 |  $$$$$$/|  $$$$$$$   \  $/  |  $$$$$$$|  $$$$$$/|  $$$$$$$| $$      | $$| $$$$$$$/  |  $$$$/
  \______/  \_______/    \_/    \_______/ \______/  \_______/|__/      |__/| $$____/    \___/  
                                                                           | $$                
                                                                           | $$                
                                                                           |__/                
 
Function used to return a flag emoji and the country name with any country code of the ISO 3166-1:2020 Alpha-2 format given as parameter...
Reference : https://en.wikipedia.org/wiki/ISO_3166-1
*/                                                                           

function countryCodeToEmojiName(countryCode) {
    switch(countryCode) {
        case 'AF':
            return '๐ฆ๐ซ Afghanistan'; 
        case 'AX':
            return '๐ฆ๐ฝ รland Islands';
        case 'AL':
            return '๐ฆ๐ฑ Albania';
        case 'DZ':
            return '๐ฉ๐ฟ Algeria';
        case 'AS':
            return '๐ฆ๐ธ American Samoa';
        case 'AD':
            return '๐ฆ๐ฉ Andorra';
        case 'AO':
            return '๐ฆ๐ด Angola ';
        case 'AI':
            return '๐ฆ๐ฎ Anguilla';
        case 'AQ':
            return '๐ฆ๐ถ Antarctica';
        case 'AG':
            return '๐ฆ๐ฌ Antigua and Barbuda';
        case 'AR':
            return '๐ฆ๐ท Argentina';
        case 'AM':
            return '๐ฆ๐ฒ Armenia';
        case 'AW':
            return '๐ฆ๐ผ Aruba';
        case 'AU':
            return '๐ฆ๐บ Australia';
        case 'AT':
            return '๐ฆ๐น Austria';
        case 'AZ':
            return '๐ฆ๐ฟ Azerbaijan';
        case 'BS':
            return '๐ง๐ธ Bahamas';
        case 'BH':
            return '๐ง๐ญ Bahrain';
        case 'BD':
            return '๐ง๐ฉ Bangladesh';
        case 'BB':
            return '๐ง๐ง Barbados';
        case 'BY':
            return '๐ง๐พ Belarus';
        case 'BE':
            return '๐ง๐ช Belgium';
        case 'BZ':
            return '๐ง๐ฟ Belize';
        case 'BJ':
            return '๐ง๐ฏ Benin';
        case 'BM':
            return '๐ง๐ฒ Bermuda';
        case 'BT':
            return '๐ง๐น Bhutan';
        case 'BO':
            return '๐ง๐ด Bolivia, Plurinational State of';
        case 'BQ':
            return '๐ง๐ถ Bonaire, Sint Eustatius and Saba';
        case 'BA':
            return '๐ง๐ฆ Bosnia and Herzegovina';
        case 'BW':
            return '๐ง๐ผ Botswana';
        case 'BV':
            return '๐ง๐ป Bouvet Island';
        case 'BR':
            return '๐ง๐ท Brazil';
        case 'IO':
            return '๐ฎ๐ด British Indian Ocean Territory';
        case 'BN':
            return '๐ง๐ณ Brunei Darussalam';
        case 'BG':
            return '๐ง๐ฌ Bulgaria';
        case 'BF':
            return '๐ง๐ซ Burkina Faso';
        case 'BI':
            return '๐ง๐ฎ Burundi';
        case 'KH':
            return '๐ฐ๐ญ Cambodia';
        case 'CM':
            return '๐จ๐ฒ Cameroon';
        case 'CA':
            return '๐จ๐ฆ Canada';
        case 'CV':
            return '๐จ๐ป Cape Verde';
        case 'KY':
            return '๐ฐ๐พ Cayman Islands';
        case 'CF':
            return '๐จ๐ซ Central African Republic';
        case 'TD':
            return '๐น๐ฉ Chad';
        case 'CL':
            return '๐จ๐ฑ Chile';
        case 'CN':
            return '๐จ๐ณ China';
        case 'CX':
            return '๐จ๐ฝ Christmas Island';
        case 'CC':
            return '๐จ๐จ Cocos (Keeling) Islands';
        case 'CO':
            return '๐จ๐ด Colombia';
        case 'KM':
            return '๐ฐ๐ฒ Comoros';
        case 'CG':
            return '๐จ๐ฌ Congo';
        case 'CD':
            return '๐จ๐ฉ Congo, the Democratic Republic of the';
        case 'CK':
            return '๐จ๐ฐ Cook Islands';
        case 'CR':
            return '๐จ๐ท Costa Rica';
        case 'CI':
            return '๐จ๐ฎ Cรดte d\'Ivoire';
        case 'HR':
            return '๐ญ๐ท Croatia';
        case 'CU':
            return '๐จ๐บ Cuba';
        case 'CW':
            return '๐จ๐ผ Curaรงao';
        case 'CY':
            return '๐จ๐พ Cyprus';
        case 'CZ':
            return '๐จ๐ฟ Czech Republic';
        case 'DK':
            return '๐ฉ๐ฐ Denmark';
        case 'DJ':
            return '๐ฉ๐ฏ Djibouti';
        case 'DM':
            return '๐ฉ๐ฒ Dominica';
        case 'DO':
            return '๐ฉ๐ด Dominican Republic';
        case 'EC':
            return '๐ช๐จ Ecuador';
        case 'EG':
            return '๐ช๐ฌ Egypt';
        case 'SV':
            return '๐ธ๐ป El Salvador';
        case 'GQ':
            return '๐ฌ๐ถ Equatorial Guinea';
        case 'ER':
            return '๐ช๐ท Eritrea';
        case 'EE':
            return '๐ช๐ช Estonia';
        case 'ET':
            return '๐ช๐น Ethiopia';
        case 'FK':
            return '๐ซ๐ฐ Falkland Islands (Malvinas)';
        case 'FO':
            return '๐ซ๐ด Faroe Islands';
        case 'FJ':
            return '๐ซ๐ฏ Fiji';
        case 'FI':
            return '๐ซ๐ฎ Finland';
        case 'FR':
            return '๐ซ๐ท France';
        case 'GF':
            return '๐ฌ๐ซ French Guiana';
        case 'PF':
            return '๐ต๐ซ French Polynesia';
        case 'TF':
            return '๐น๐ซ French Southern Territories';
        case 'GA':
            return '๐ฌ๐ฆ Gabon';
        case 'GM':
            return '๐ฌ๐ฒ Gambia';
        case 'GE':
            return '๐ฌ๐ช Georgia';
        case 'DE':
            return '๐ฉ๐ช Germany';
        case 'GH':
            return '๐ฌ๐ญ Ghana';
        case 'GI':
            return '๐ฌ๐ฎ Gibraltar';
        case 'GR':
            return '๐ฌ๐ท Greece';
        case 'GL':
            return '๐ฌ๐ฑ Greenland';
        case 'GD':
            return '๐ฌ๐ฉ Grenada';
        case 'GP':
            return '๐ฌ๐ต Guadeloupe';
        case 'GU':
            return '๐ฌ๐บ Guam';
        case 'GT':
            return '๐ฌ๐น Guatemala';
        case 'GG':
            return '๐ฌ๐ฌ Guernsey ';
        case 'GN':
            return '๐ฌ๐ณ Guinea';
        case 'GW':
            return '๐ฌ๐ผ Guinea-Bissau';
        case 'GY':
            return '๐ฌ๐พ Guyana';
        case 'HT':
            return '๐ญ๐น Haiti';
        case 'HM':
            return '๐ญ๐ฒ Heard Island and McDonald Islands';
        case 'VA':
            return '๐ป๐ฆ Holy See (Vatican City State)';
        case 'HN':
            return '๐ญ๐ณ Honduras';
        case 'HK':
            return '๐ญ๐ฐ Hong Kong';
        case 'HU':
            return '๐ญ๐บ Hungary';
        case 'IS':
            return '๐ฎ๐ธ Iceland';
        case 'IN':
            return '๐ฎ๐ณ India';
        case 'ID':
            return '๐ฎ๐ฉ Indonesia';
        case 'IR':
            return '๐ฎ๐ท Iran, Islamic Republic of';
        case 'IQ':
            return '๐ฎ๐ถ Iraq';
        case 'IE':
            return '๐ฎ๐ช Ireland';
        case 'IM':
            return '๐ฎ๐ฒ Isle of Man';
        case 'IL':
            return '๐ฎ๐ฑ Israel';
        case 'IT':
            return '๐ฎ๐น Italy';
        case 'JM':
            return '๐ฏ๐ฒ Jamaica';
        case 'JP':
            return '๐ฏ๐ต Japan';
        case 'JE':
            return '๐ฏ๐ช Jersey';
        case 'JO':
            return '๐ฏ๐ด Jordan';
        case 'KZ':
            return '๐ฐ๐ฟ Kazakhstan';
        case 'KE':
            return '๐ฐ๐ช Kenya';
        case 'KI':
            return '๐ฐ๐ฎ Kiribati';
        case 'KP':
            return '๐ฐ๐ต Korea, Democratic People\'s Republic of';
        case 'KR':
            return '๐ฐ๐ท Korea, Republic of';
        case 'KW':
            return '๐ฐ๐ผ Kuwait';
        case 'KG':
            return '๐ฐ๐ฌ Kyrgyzstan';
        case 'LA':
            return '๐ฑ๐ฆ Lao People\'s Democratic Republic ';
        case 'LV':
            return '๐ฑ๐ป Latvia';
        case 'LB':
            return '๐ฑ๐ง Lebanon';
        case 'LS':
            return '๐ฑ๐ธ Lesotho';
        case 'LR':
            return '๐ฑ๐ท Liberia';
        case 'LY':
            return '๐ฑ๐พ Libya';
        case 'LI':
            return '๐ฑ๐ฎ Liechtenstein';
        case 'LT':
            return '๐ฑ๐น Lithuania';
        case 'LU':
            return '๐ฑ๐บ Luxembourg';
        case 'MO':
            return '๐ฒ๐ด Macao';
        case 'MK':
            return '๐ฒ๐ฐ Macedonia, the former Yugoslav Republic of';
        case 'MG':
            return '๐ฒ๐ฌ Madagascar';
        case 'MW':
            return '๐ฒ๐ผ Malawi';
        case 'MY':
            return '๐ฒ๐พ Malaysia';
        case 'MV':
            return '๐ฒ๐ป Maldives';
        case 'ML':
            return '๐ฒ๐ฑ Mali';
        case 'MT':
            return '๐ฒ๐น Malta';
        case 'MH':
            return '๐ฒ๐ญ Marshall Islands';
        case 'MQ':
            return '๐ฒ๐ถ Martinique';
        case 'MR':
            return '๐ฒ๐ท Mauritania';
        case 'MU':
            return '๐ฒ๐บ Mauritius';
        case 'YT':
            return '๐พ๐น Mayotte';
        case 'MX':
            return '๐ฒ๐ฝ Mexico';
        case 'FM':
            return '๐ซ๐ฒ Micronesia, Federated States of';
        case 'MD':
            return '๐ฒ๐ฉ Moldova, Republic of';
        case 'MC':
            return '๐ฒ๐จ Monaco';
        case 'MN':
            return '๐ฒ๐ณ Mongolia';
        case 'ME':
            return '๐ฒ๐ช Montenegro';
        case 'MS':
            return '๐ฒ๐ธ Montserrat';
        case 'MA':
            return '๐ฒ๐ฆ Morocco';
        case 'MZ':
            return '๐ฒ๐ฟ Mozambique';
        case 'MM':
            return '๐ฒ๐ฒ Myanmar';
        case 'NA':
            return '๐ณ๐ฆ Namibia';
        case 'NR':
            return '๐ณ๐ท Nauru';
        case 'NP':
            return '๐ณ๐ต Nepal';
        case 'NL':
            return '๐ณ๐ฑ Netherlands';
        case 'NC':
            return '๐ณ๐จ New Caledonia';
        case 'NZ':
            return '๐ณ๐ฟ New Zealand';
        case 'NI':
            return '๐ณ๐ฎ Nicaragua';
        case 'NE':
            return '๐ณ๐ช Niger';
        case 'NG':
            return '๐ณ๐ฌ Nigeria';
        case 'NU':
            return '๐ณ๐บ Niue';
        case 'NF':
            return '๐ณ๐ซ Norfolk Island';
        case 'MP':
            return '๐ฒ๐ต Northern Mariana Islands';
        case 'NO':
            return '๐ณ๐ด Norway';
        case 'OM':
            return '๐ด๐ฒ Oman';
        case 'PK':
            return '๐ต๐ฐ Pakistan';
        case 'PW':
            return '๐ต๐ผ Palau';
        case 'PS':
            return '๐ต๐ธ Palestinian Territory, Occupied';
        case 'PA':
            return '๐ต๐ฆ Panama';
        case 'PG':
            return '๐ต๐ฌ Papua New Guinea';
        case 'PY':
            return '๐ต๐พ Paraguay';
        case 'PE':
            return '๐ต๐ช Peru';
        case 'PH':
            return '๐ต๐ญ Philippines';
        case 'PN':
            return '๐ต๐ณ Pitcairn ';
        case 'PL':
            return '๐ต๐ฑ Poland';
        case 'PT':
            return '๐ต๐น Portugal';
        case 'PR':
            return '๐ต๐ท Puerto Rico';
        case 'QA':
            return '๐ถ๐ฆ Qatar';
        case 'RE':
            return '๐ท๐ช Rรฉunion';
        case 'RO':
            return '๐ท๐ด Romania';
        case 'RU':
            return '๐ท๐บ Russian Federation';
        case 'RW':
            return '๐ท๐ผ Rwanda';
        case 'BL':
            return '๐ง๐ฑ Saint Barthรฉlemy';
        case 'SH':
            return '๐ธ๐ญ Saint Helena, Ascension and Tristan da Cunha';
        case 'KN':
            return '๐ฐ๐ณ Saint Kitts and Nevis';
        case 'LC':
            return '๐ฑ๐จ Saint Lucia';
        case 'MF':
            return '๐ฒ๐ซ Saint Martin (French part)';
        case 'PM':
            return '๐ต๐ฒ Saint Pierre and Miquelon';
        case 'VC':
            return '๐ป๐จ Saint Vincent and the Grenadines';
        case 'WS':
            return '๐ผ๐ธ Samoa';
        case 'SM':
            return '๐ธ๐ฒ San Marino';
        case 'ST':
            return '๐ธ๐น Sao Tome and Principe';
        case 'SA':
            return '๐ธ๐ฆ Saudi Arabia';
        case 'SN':
            return '๐ธ๐ณ Senegal';
        case 'RS':
            return '๐ท๐ธ Serbia';
        case 'SC':
            return '๐ธ๐จ Seychelles';
        case 'SL':
            return '๐ธ๐ฑ Sierra Leone';
        case 'SG':
            return '๐ธ๐ฌ Singapore';
        case 'SX':
            return '๐ธ๐ฝ Sint Maarten (Dutch part)';
        case 'SK':
            return '๐ธ๐ฐ Slovakia';
        case 'SI':
            return '๐ธ๐ฎ Slovenia';
        case 'SB':
            return '๐ธ๐ง Solomon Islands';
        case 'SO':
            return '๐ธ๐ด Somalia';
        case 'ZA':
            return '๐ฟ๐ฆ South Africa';
        case 'GS':
            return '๐ฌ๐ธ South Georgia and the South Sandwich Islands';
        case 'SS':
            return '๐ธ๐ธ South Sudan';
        case 'ES':
            return '๐ช๐ธ Spain';
        case 'LK':
            return '๐ฑ๐ฐ Sri Lanka';
        case 'SD':
            return '๐ธ๐ฉ Sudan';
        case 'SR':
            return '๐ธ๐ท Suriname';
        case 'SJ':
            return '๐ธ๐ฏ Svalbard and Jan Mayen';
        case 'SZ':
            return '๐ธ๐ฟ Swaziland';
        case 'SE':
            return '๐ธ๐ช Sweden';
        case 'CH':
            return '๐จ๐ญ Switzerland';
        case 'SY':
            return '๐ธ๐พ Syrian Arab Republic';
        case 'TW':
            return '๐น๐ผ Taiwan, Province of China';
        case 'TJ':
            return '๐น๐ฏ Tajikistan';
        case 'TZ':
            return '๐น๐ฟ Tanzania, United Republic of';
        case 'TH':
            return '๐น๐ญ Thailand';
        case 'TL':
            return '๐น๐ฑ Timor-Leste';
        case 'TG':
            return '๐น๐ฌ Togo';
        case 'TK':
            return '๐น๐ฐ Tokelau';
        case 'TO':
            return '๐น๐ด Tonga';
        case 'TT':
            return '๐น๐น Trinidad and Tobago';
        case 'TN':
            return '๐น๐ณ Tunisia';
        case 'TR':
            return '๐น๐ท Turkey';
        case 'TM':
            return '๐น๐ฒ Turkmenistan';
        case 'TC':
            return '๐น๐จ Turks and Caicos Islands';
        case 'TV':
            return '๐น๐ป Tuvalu';
        case 'UG':
            return '๐บ๐ฌ Uganda';
        case 'UA':
            return '๐บ๐ฆ Ukraine';
        case 'AE':
            return '๐ฆ๐ช United Arab Emirates';
        case 'GB':
            return '๐ฌ๐ง United Kingdom';
        case 'US':
            return '๐บ๐ธ United States';
        case 'UM':
            return '๐บ๐ฒ United States Minor Outlying Islands';
        case 'UY':
            return '๐บ๐พ Uruguay';
        case 'UZ':
            return '๐บ๐ฟ Uzbekistan';
        case 'VU':
            return '๐ป๐บ Vanuatu';
        case 'VE':
            return '๐ป๐ช Venezuela, Bolivarian Republic of';
        case 'VN':
            return '๐ป๐ณ Viet Nam';
        case 'VG':
            return '๐ป๐ฌ Virgin Islands, British';
        case 'VI':
            return '๐ป๐ฎ Virgin Islands, U.S.';
        case 'WF':
            return '๐ผ๐ซ Wallis and Futuna';
        case 'EH':
            return '๐ช๐ญ Western Sahara';
        case 'YE':
            return '๐พ๐ช Yemen';
        case 'ZM':
            return '๐ฟ๐ฒ Zambia';
        case 'ZW':
            return '๐ฟ๐ผ Zimbabwe';
        default:
            return 'โ Unknown country';
    }
}
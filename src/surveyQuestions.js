import React from "react";
import Question from "./components/Question/question";
import YesNo from "./components/Yes_NoBox/yes_nobox";
import MultiChoice from "./components/MultiChoice/multichoice";
import FillBlank from "./components/FillBlank/fillblank";
import Rate from "./components/Rate/rate";
import PressEnter from "./components/PressEnter/pressEnter";

const cityChar = [
  " Down-to-earth",
  "Honest",
  "Cheerful",
  "Daring",
  "Spirited",
  "Imaginative",
  "Reliable",
  "Intelligent",
  "Successful",
  " Upper-class",
  "Sophisticated",
  " Charming",
  "Outdoorsy",
  "Tough",
  "Rugged"
];

const city = ["Lithonia", "Stonecrest"];

const phoneProvider = [
  "AT&T",
  "Boost Mobile",
  "Cricket",
  "MetroPCS",
  "Sprint",
  "Trac-Fone",
  "T-Mobile",
  "U.S Cellular",
  "Verizone Wireless",
  "Virgin Mobile",
  "My cell phone service provider is not listed above"
];

const socialMedia = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Snapchat",
  "Pintrest",
  "Twitter",
  "None"
];

const durationSocialMedia = [
  "Less than 1 hour",
  "2-5 hours",
  "More than 6 hours"
];

const age = [
  "18 or younger",
  "19 - 24",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 - 64",
  "65 or older"
];

const income = [
  " $9,999 or less",
  "$10,000 - $24,999",
  "$25,000 - $49,999",
  "$50,000 - $74,999",
  "$75,000 - $99,999",
  "$100,000 or more",
  "I prefer not to answer"
];

const employStatus = [
"Employed full-time",
"Employed part-time",
'Self-employed',
'Unemployed',
"Not looking for work",
'Homemaker',
'Retired',
'Student',
'I prefer not to answer',
]

const highestEdu = [
'Less than High School',
'High School',
'Some College / University',
'Undergraduate Degree',
'Masters / Graduate Degree',
'Doctorate',
'Prefer not to answer'
]

const maritalStatus = [
'Single, never married',
'Married or domestic partnership',
'Divorced',
'Widowed',
'Separated',
]

const country = [
  'United States of America',
  'Mexico'

]

const country2 = [
  "Afghanistan -AF", 
  "land Islands -AX", 
  "Albania -AL", 
  "Algeria -DZ", 
  "American Samoa -AS", 
  "AndorrA -AD", 
  "Angola -AO", 
  "Anguilla -AI", 
  "Antarctica -AQ", 
  "Antigua and Barbuda -AG", 
  "Argentina -AR", 
  "Armenia -AM", 
  "Aruba -AW", 
  "Australia -AU", 
  "Austria -AT", 
  "Azerbaijan -AZ", 
  "Bahamas -BS", 
  "Bahrain -BH", 
  "Bangladesh -BD", 
  "Barbados -BB", 
  "Belarus -BY", 
  "Belgium -BE", 
  "Belize -BZ", 
  "Benin -BJ", 
  "Bermuda -BM", 
  "Bhutan -BT", 
  "Bolivia -BO", 
  "Bosnia and Herzegovina -BA", 
  "Botswana -BW", 
  "Bouvet Island -BV", 
  "Brazil -BR", 
  "British Indian Ocean Territory -IO", 
  "Brunei Darussalam -BN", 
  "Bulgaria -BG", 
  "Burkina Faso -BF", 
  "Burundi -BI", 
  "Cambodia -KH", 
  "Cameroon -CM", 
  "Canada -CA", 
  "Cape Verde -CV", 
  "Cayman Islands -KY", 
  "Central African Republic -CF", 
  "Chad -TD", 
  "Chile -CL", 
  "China -CN", 
  "Christmas Island -CX", 
  "Cocos (Keeling) Islands -CC", 
  "Colombia -CO", 
  "Comoros -KM", 
  "Congo -CG", 
  "Congo, The Democratic Republic of the -CD", 
  "Cook Islands -CK", 
  "Costa Rica -CR", 
  "Cote D'Ivoire -CI", 
  "Croatia -HR", 
  "Cuba -CU", 
  "Cyprus -CY", 
  "Czech Republic -CZ", 
  "Denmark -DK", 
  "Djibouti -DJ", 
  "Dominica -DM", 
  "Dominican Republic -DO", 
  "Ecuador -EC", 
  "Egypt -EG", 
  "El Salvador -SV", 
  "Equatorial Guinea -GQ", 
  "Eritrea -ER", 
  "Estonia -EE", 
  "Ethiopia -ET", 
  "Falkland Islands (Malvinas) -FK", 
  "Faroe Islands -FO", 
  "Fiji -FJ", 
  "Finland -FI", 
  "France -FR", 
  "French Guiana -GF", 
  "French Polynesia -PF", 
  "French Southern Territories -TF", 
  "Gabon -GA", 
  "Gambia -GM", 
  "Georgia -GE", 
  "Germany -DE", 
  "Ghana -GH", 
  "Gibraltar -GI", 
  "Greece -GR", 
  "Greenland -GL", 
  "Grenada -GD", 
  "Guadeloupe -GP", 
  "Guam -GU", 
  "Guatemala -GT", 
  "Guernsey -GG", 
  "Guinea -GN", 
  "Guinea-Bissau -GW", 
  "Guyana -GY", 
  "Haiti -HT", 
  "Heard Island and Mcdonald Islands -HM", 
  "Holy See (Vatican City State) -VA", 
  "Honduras -HN", 
  "Hong Kong -HK", 
  "Hungary -HU", 
  "Iceland -IS", 
  "India -IN", 
  "Indonesia -ID", 
  "Iran, Islamic Republic Of -IR", 
  "Iraq -IQ", 
  "Ireland -IE", 
  "Isle of Man -IM", 
  "Israel -IL", 
  "Italy -IT", 
  "Jamaica -JM", 
  "Japan -JP", 
  "Jersey -JE", 
  "Jordan -JO", 
  "Kazakhstan -KZ", 
  "Kenya -KE", 
  "Kiribati -KI", 
  "Korea, Democratic People'S Republic of -KP", 
  "Korea, Republic of -KR", 
  "Kuwait -KW", 
  "Kyrgyzstan -KG", 
  "Lao People'S Democratic Republic -LA", 
  "Latvia -LV", 
  "Lebanon -LB", 
  "Lesotho -LS", 
  "Liberia -LR", 
  "Libyan Arab Jamahiriya -LY", 
  "Liechtenstein -LI", 
  "Lithuania -LT", 
  "Luxembourg -LU", 
  "Macao -MO", 
  "Macedonia, The Former Yugoslav Republic of -MK", 
  "Madagascar -MG", 
  "Malawi -MW", 
  "Malaysia -MY", 
  "Maldives -MV", 
  "Mali -ML", 
  "Malta -MT", 
  "Marshall Islands -MH", 
  "Martinique -MQ", 
  "Mauritania -MR", 
  "Mauritius -MU", 
  "Mayotte -YT", 
  "Mexico -MX", 
  "Micronesia, Federated States of -FM", 
  "Moldova, Republic of -MD", 
  "Monaco -MC", 
  "Mongolia -MN", 
  "Montenegro -ME",
  "Montserrat -MS",
  "Morocco -MA", 
  "Mozambique -MZ", 
  "Myanmar -MM", 
  "Namibia -NA", 
  "Nauru -NR", 
  "Nepal -NP", 
  "Netherlands -NL", 
  "Netherlands Antilles -AN", 
  "New Caledonia -NC", 
  "New Zealand -NZ", 
  "Nicaragua -NI", 
  "Niger -NE", 
  "Nigeria -NG", 
  "Niue -NU", 
  "Norfolk Island -NF", 
  "Northern Mariana Islands -MP", 
  "Norway -NO", 
  "Oman -OM", 
  "Pakistan -PK", 
  "Palau -PW", 
  "Palestinian Territory, Occupied -PS", 
  "Panama -PA", 
  "Papua New Guinea -PG", 
  "Paraguay -PY", 
  "Peru -PE", 
  "Philippines -PH", 
  "Pitcairn -PN", 
  "Poland -PL", 
  "Portugal -PT", 
  "Puerto Rico -PR", 
  "Qatar -QA", 
  "Reunion -RE", 
  "Romania -RO", 
  "Russian Federation -RU", 
  "RWANDA -RW", 
  "Saint Helena -SH", 
  "Saint Kitts and Nevis -KN", 
  "Saint Lucia -LC", 
  "Saint Pierre and Miquelon -PM", 
  "Saint Vincent and the Grenadines -VC", 
  "Samoa -WS", 
  "San Marino -SM", 
  "Sao Tome and Principe -ST", 
  "Saudi Arabia -SA", 
  "Senegal -SN", 
  "Serbia -RS", 
  "Seychelles -SC", 
  "Sierra Leone -SL", 
  "Singapore -SG", 
  "Slovakia -SK", 
  "Slovenia -SI", 
  "Solomon Islands -SB", 
  "Somalia -SO", 
  "South Africa -ZA", 
  "South Georgia and the South Sandwich Islands -GS", 
  "Spain -ES", 
  "Sri Lanka -LK", 
  "Sudan -SD", 
  "Suriname -SR", 
  "Svalbard and Jan Mayen -SJ", 
  "Swaziland -SZ", 
  "Sweden -SE", 
  "Switzerland -CH", 
  "Syrian Arab Republic -SY", 
  "Taiwan, Province of China -TW", 
  "Tajikistan -TJ", 
  "Tanzania, United Republic of -TZ", 
  "Thailand -TH", 
  "Timor-Leste -TL", 
  "Togo -TG", 
  "Tokelau -TK", 
  "Tonga -TO", 
  "Trinidad and Tobago -TT", 
  "Tunisia -TN", 
  "Turkey -TR", 
  "Turkmenistan -TM", 
  "Turks and Caicos Islands -TC", 
  "Tuvalu -TV", 
  "Uganda -UG", 
  "Ukraine -UA", 
  "United Arab Emirates -AE", 
  "United Kingdom -GB", 
  "United States -US", 
  "United States Minor Outlying Islands -UM", 
  "Uruguay -UY", 
  "Uzbekistan -UZ", 
  "Vanuatu -VU", 
  "Venezuela -VE", 
  "Viet Nam -VN", 
  "Virgin Islands, British -VG", 
  "Virgin Islands, U.S. -VI", 
  "Wallis and Futuna -WF", 
  "Western Sahara -EH", 
  "Yemen -YE", 
  "Zambia -ZM", 
  "Zimbabwe -ZW"
]
const questionsArray = [
  <Question
    id={0}
    key={0}
    continue={<PressEnter/>}
    className="question-entry question-group"
    question="1 &#8594; Let's start by finding how involved you are within your community"
  />,
  <Question
    id={1}
    key={1}
    className="question-hidden"
    QuestionType={<YesNo />}
    question="a. Have you ever thought about investing in a business in your area?"
  />,

  <Question
    id={2}
    key={2}
    className="question-hidden"
    QuestionType={<YesNo />}
    question="b. ... what about opening your own business close by?"
  />,
  <Question
    id="header-trigger-2"
    key={3}
    continue={<PressEnter/>}
    className="question-hidden  question-group"
    question="2 &#8594;  Nice! So let's hear your thoughts about your city... "
  />,
  <Question
    id={4}
    key={4}
    className="question-hidden"
    question="Which city do you call home?"
    QuestionType={<MultiChoice char={city} />}
  />,
  <Question
    id={5}
    key={5}
    className="question-hidden"
    question="b. If _ _ _ was a person, which of the following adjectives do you feel would best describe their personality?"
    QuestionType={<MultiChoice char={cityChar} />}
  />,
  <Question
    id={6}
    key={6}
    className="question-hidden"
    question="b. If _ _ _ was a person, which of the following adjectives do you feel would best describe their personality?"
    QuestionType={<FillBlank />}
  />,
  <Question
    id={7}
    key={7}
    className="question-hidden"
    question="c. If _ _ _ was a person, which of the following adjectives do you feel would best describe their personality?"
    QuestionType={<FillBlank />}
  />,
  <Question
    id={8}
    key={8}
    className="question-hidden"
    question="d.  And what puts you off it?"
    QuestionType={<FillBlank />}
  />,

  <Question
    id={9}
    key={9}
    className="question-hidden"
    question="e. What types of establishments would you like to bring to ?"
    QuestionType={<FillBlank />}
  />,

  <Question
    id={10}
    key={10}
    className="question-hidden"
    question="f. How satisfied are you with the shopping/entertainment/wellness options currently in ____ ?"
    QuestionType={<Rate />}
  />,

  <Question
    id={11}
    key={11}
    continue={<PressEnter/>}
    className="question-hidden  question-group"
    question="3. &#8594; You're doing great; we're about halfway through now. "
  />,

  <Question
    id={12}
    key={12}
    className="question-hidden"
    question="a.What benefits could you see with an application to help build the community ?"
    QuestionType={<FillBlank />}
  />,
  <Question
    id={13}
    key={13}
    className="question-hidden"
    question="b. Would you be interested in monetary reward for your input towards building your community?"
    QuestionType={<YesNo />}
  />,
  <Question
    id={14}
    key={14}
    className="question-hidden  question-group"
    question="4. &#8594; Thank you. We're almost there—just some questions about you."
  />,

  <Question
    id={15}
    key={15}
    className="question-hidden "
    question="a. Mobile Phone Provider."
    QuestionType={<MultiChoice char={phoneProvider} />}
  />,

  <Question
    id={16}
    key={16}
    className="question-hidden"
    question="b. What social media platform do you use ?"
    QuestionType={<MultiChoice char={socialMedia} />}
  />,

  <Question
    id={17}
    key={17}
    className="question-hidden"
    question="c. Roughly how long do you spend on social media per week?"
    QuestionType={<MultiChoice char={durationSocialMedia} />}
  />,

  <Question
    id={18}
    key={18}
    className="question-hidden"
    question="e. What's your age range??"
    QuestionType={<MultiChoice char={age} />}
  />,
  <Question
    id={19}
    key={19}
    className="question-hidden"
    question="f. ...and your yearly income??"
    QuestionType={<MultiChoice char={income} />}
  />,
  <Question
    id={20}
    key={20}
    className="question-hidden"
    question="g. What's your current employment status? ?"
    QuestionType={<MultiChoice char={employStatus} />}
  />,
  <Question
    id={21}
    key={21}
    className="question-hidden"
    question="h. Whats the highest level of education you've completed?"
    QuestionType={<MultiChoice char={highestEdu} />}
  />,
  <Question
  id={22}
  key={22}
  className="question-hidden"
  question="h. Marital Status?"
  QuestionType={<MultiChoice char={maritalStatus} />}
/>,
  <Question
  id={23}
  key={23}
  className="question-hidden"
  question="h. Country you were bon in?"
  QuestionType={<MultiChoice char={country} />}
/>,
];

export default questionsArray;

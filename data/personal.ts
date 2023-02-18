/**
 * Personal Information - School & College
 */

interface Friend {
  name: string;
  image: string;
  url: string;
}

export interface PersonalInfo {
  title: string;
  date: string;
  description: string[];
  images?: string[];
  friends?: Friend[];
}

type PersonalInfos = PersonalInfo[];

export const SCHOOL_INFO: PersonalInfos = [
  {
    title: "New school, new journey",
    date: "July 2013",
    description: [
      "Joined St. Johns's International Residential School. Didn't have much ambitions then but compared to my past performance, I wished to improve on myself this time.",
      "I don't remember how we got the phone to take the picture here, what's even more odd is our pose in the picture as well XD.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676704264/Portfolio/Personal/School/school_vkazho.png",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676674762/Portfolio/Personal/School/first_pic_of_school_-_jul_2013_utv9r6.jpg",
    ],
  },
  {
    title: "Special Assembly",
    date: "Jan 2017",
    description: [
      "Our class conducted the monthly special assembly for the entire school.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755316/Portfolio/Personal/School/011_qw7sqo.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755390/Portfolio/Personal/School/046_jurtxs.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755397/Portfolio/Personal/School/123_vhkxnj.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755403/Portfolio/Personal/School/124_ftahad.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755404/Portfolio/Personal/School/091_gg69ps.jpg",
    ],
  },
  {
    title: "Birthday celebration",
    date: "December 2017",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754540/Portfolio/Personal/School/birthday1_u28upi.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754540/Portfolio/Personal/School/birthday2_h1l9nw.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754539/Portfolio/Personal/School/birthday_zmfa2y.jpg",
    ],
  },
  {
    title: "Annual day & first rank prize",
    date: "February 2018",
    description: [
      "Yearly annual day celebration.",
      "Proud to have earned the first rank prize for my academic achievements in the 9th grade, a testament to my dedication and hard work.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755013/Portfolio/Personal/School/first_rank1_v5hz51.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755010/Portfolio/Personal/School/first_rank_xicglc.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755012/Portfolio/Personal/School/first_rank3_q1wvzt.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755011/Portfolio/Personal/School/first_rank2_cnpgai.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755011/Portfolio/Personal/School/first_rank4_wdrisd.jpg",
    ],
  },
  {
    title: "Graduated 10th & body boom XD",
    date: "March 2018",
    description: [
      "Completed my 10th exams and passed with close to 80% grade.",
      "Put on weight due to personal health issues. 〒▽〒",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755768/Portfolio/Personal/School/weight_boom5_hsgkcx.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755774/Portfolio/Personal/School/weight_boom4_azj93l.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755772/Portfolio/Personal/School/weight_boom2_fwowf8.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755772/Portfolio/Personal/School/weight_boom3_nfhj8j.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755769/Portfolio/Personal/School/weight_boom1_pl6nwu.jpg",
    ],
  },
  {
    title: "Teacher's day celebration",
    date: "September 2018",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755985/Portfolio/Personal/School/teachers2_dpoqbp.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755986/Portfolio/Personal/School/teachers3_dwcrji.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755986/Portfolio/Personal/School/teachers4_etwphx.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755987/Portfolio/Personal/School/teachers1_hqjg1h.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755987/Portfolio/Personal/School/teachers5_dlu7f1.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676755989/Portfolio/Personal/School/teachers_v8hbie.jpg",
    ],
  },
  {
    title: "Rangoli Fest @SJPS",
    date: "November 2018",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756450/Portfolio/Personal/School/rangoli2_sjnu5r.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756451/Portfolio/Personal/School/rangoli3_oetlbr.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756451/Portfolio/Personal/School/rangoli1_gw3aed.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756452/Portfolio/Personal/School/rangoli_g9j2rr.jpg",
    ],
  },
  {
    title: "Birthday Celebration",
    date: "December 2018",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754743/Portfolio/Personal/School/birthday2_pkwe22.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754746/Portfolio/Personal/School/birthday1_bc7sp8.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754750/Portfolio/Personal/School/birthday_hujpsm.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754750/Portfolio/Personal/School/birthday3_mtzmmb.jpg",
    ],
  },
  {
    title: "Children's Day Celebration",
    date: "November 2018",
    description: ["Not me being professionally dressed for this (￣m￣）"],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754833/Portfolio/Personal/School/children2_uqpltt.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754833/Portfolio/Personal/School/children3_n8zfqp.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754834/Portfolio/Personal/School/children_zan81x.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676754837/Portfolio/Personal/School/children1_aaaza4.jpg",
    ],
  },
  {
    title: "Pongal",
    date: "January 2019",
    description: [
      "Celebrating the culture with traditional wear.",
      "I'm the one not in vesti (￣_￣|||)",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756581/Portfolio/Personal/School/pongal1_zfhqrz.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756582/Portfolio/Personal/School/pongal_te6bmp.jpg",
    ],
  },
  {
    title: "Indian Coast Guard Quiz",
    date: "January 2019",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756740/Portfolio/Personal/School/coast_kfxvtc.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756740/Portfolio/Personal/School/coast2_pzqiop.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756740/Portfolio/Personal/School/coast3_meak6w.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756745/Portfolio/Personal/School/coast1_jnkvmt.jpg",
    ],
  },
  {
    title: "Model Making Competition",
    date: "January 2019",
    description: [
      "Helped create a smart city model for a competition, don't remember from which place the competition was for though 😅.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756855/Portfolio/Personal/School/model3_yvwjzp.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756855/Portfolio/Personal/School/model1_lciydb.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756858/Portfolio/Personal/School/model_zokraq.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756863/Portfolio/Personal/School/model2_oms37n.jpg",
    ],
  },
  {
    title: "Ryla Camp",
    date: "August 2019",
    description: [
      "Took part in an external event conducted by the Ryla NGO. Slept on the beach (then in a room XD) to get a feel for camping.",
      "Yohan is not welcomed ╰（‵□′）╯",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756991/Portfolio/Personal/School/ryla2_jjcivr.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756991/Portfolio/Personal/School/ryla_pqhrvb.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756992/Portfolio/Personal/School/ryla3_hwwtfy.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756992/Portfolio/Personal/School/ryla4_rr5nyq.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676756995/Portfolio/Personal/School/ryla1_nqbgzn.jpg",
    ],
  },
  {
    title: "Last Teacher's day at School",
    date: "September 2019",
    description: [
      "Our class conducted the teachers day celebration. This being the last done, it was quite emotional for many of us.",
      "With the condition the school was in, everything became a last.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757158/Portfolio/Personal/School/teachers1_hsgaj3.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757158/Portfolio/Personal/School/teachers2_hx0o3b.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757160/Portfolio/Personal/School/teachers4_jsvqut.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757161/Portfolio/Personal/School/teachers3_bewy7t.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757162/Portfolio/Personal/School/teachers_wiapzx.jpg",
    ],
  },
  {
    title: "ISRO Quiz & Biotech competition",
    date: "October 2019",
    description: [
      "Won the second place in a quiz conducted by ISRO, and was rewarded with a memento from the organization.",
      "Participated in a competition by St. Josephs College on biotechnology and won the first prize, with cash and certificates.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757421/Portfolio/Personal/School/isro1_conqc9.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757422/Portfolio/Personal/School/isro_etm7ai.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757422/Portfolio/Personal/School/isro2_t3kccd.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757429/Portfolio/Personal/School/biotech3_pecqkb.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757435/Portfolio/Personal/School/biotech_hzayp6.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757437/Portfolio/Personal/School/biotech1_rxwcnk.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757451/Portfolio/Personal/School/biotech2_c7mrkz.jpg",
    ],
  },
  {
    title: "Last sports day at school",
    date: "October 2019",
    description: [""],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757620/Portfolio/Personal/School/sports1_uw04ag.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757622/Portfolio/Personal/School/sports3_dgfsvn.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757622/Portfolio/Personal/School/sports2_pfqtvd.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757626/Portfolio/Personal/School/sports_q99btt.jpg",
    ],
  },
  {
    title: "Chennai Model United Nations (CHEMUN)",
    date: "November 2019",
    description: [
      "Participated as a delegate of Kuwait in the CHEMUN held at 2019, thanks to Kumars' efforts.",
      "Sahil took all the goods for himself as usual and I ended up going crazy on the dance floor ┏(＾0＾)┛",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757723/Portfolio/Personal/School/mun3_ekggat.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757730/Portfolio/Personal/School/mun5_qirr4r.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757744/Portfolio/Personal/School/mun4_yp6tkx.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757745/Portfolio/Personal/School/mun2_vtelg4.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676757760/Portfolio/Personal/School/mun1_rhbhwe.jpg",
    ],
  },
  {
    title: "Birthday Bash",
    date: "December 2019",
    description: [
      "Celebrated birthday with friends from school at my home. First time I invited my friends over at home for something other than studies.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671565/Portfolio/Personal/School/birthday_3_pw0aeo.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671565/Portfolio/Personal/School/birthday_2_dn3knz.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671562/Portfolio/Personal/School/birthday_1_ra86jb.jpg",
    ],
  },
  {
    title: "Last practical exam at school",
    date: "Feb 2020",
    description: [
      "The last practical in school. Done with it with a blast and completed the practical with loads of fun. Sure there was some pressure, but with my friends there, it was quite fun to do it.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671089/Portfolio/Personal/School/practical_exam_d8aatz.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_1_srsooe.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_3_nawh8i.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671086/Portfolio/Personal/School/praactical_exam_fcf59u.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676671087/Portfolio/Personal/School/practical_exam_2_rgtk7s.jpg",
    ],
  },
  {
    title: "Graduated 12th",
    date: "March 2020",
    description: [
      "Finished schooling at St. Johns International Residential School just as the COVID-19 Pandemic hit. I was lucky enough to finish all my exams before the lock down became official.",
    ],
    images: [
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668534/Portfolio/Personal/School/finsished_school_ddrbzo.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_2_kfksdq.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_wrqmjs.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668536/Portfolio/Personal/School/finished_school_p1l7px.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668533/Portfolio/Personal/School/finsihed_school_hxlb0m.jpg",
      "https://res.cloudinary.com/kunalkeshan/image/upload/v1676668535/Portfolio/Personal/School/finshed_school_1_ox00na.jpg",
    ],
  },
];

export const COLLEGE_INFO: PersonalInfos = [];

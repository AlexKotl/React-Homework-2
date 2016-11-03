import React from 'react';
import Article from 'src/Article/Article.jsx';

/**
 * Articles List
 */
class ArticlesList extends React.Component {

    state = {
        indexOpenArticle: null
    }

    articles = [
      {
        "id": "581484f08682751007278f05",
        "isRead": true,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Oneal",
          "last": "Ferrell"
        },
        "title": "Ex exercitation tempor sit sunt ad veniam cupidatat magna irure minim cillum.",
        "text": "Laboris reprehenderit labore laboris magna do incididunt labore tempor sit velit. Mollit aute consectetur ullamco dolor. Fugiat cillum duis mollit pariatur cillum excepteur mollit dolor sint aute sit mollit. Qui nisi eiusmod pariatur dolor commodo in voluptate.\n\nExcepteur sit labore cupidatat laborum. Aliqua deserunt deserunt officia non quis sit tempor cillum aute Lorem. Occaecat dolore proident dolore amet sit labore sint et. Irure nulla exercitation exercitation nisi commodo. Duis cupidatat ullamco deserunt cupidatat quis esse non duis do labore est ad. Laborum laborum nulla ut exercitation id eiusmod est id proident.",
        "comments": [
          {
            "id": "217b9ab5-c24d-46bc-9ef8-87e1b406005b",
            "name": {
              "first": "Bobbie",
              "last": "Singleton"
            },
            "title": "",
            "text": "Dolore officia nulla ullamco dolore. Non excepteur incididunt labore eiusmod incididunt ullamco in velit. Incididunt labore quis nostrud nulla esse ullamco ut ullamco consequat qui duis."
          },
          {
            "id": "81c88baf-f13f-4dbe-9694-2ec3bc8d9605",
            "name": {
              "first": "Rosalyn",
              "last": "Mccormick"
            },
            "title": "",
            "text": "Voluptate laborum minim quis adipisicing eiusmod exercitation veniam voluptate ipsum incididunt in. Proident velit veniam occaecat dolore in. Aute laboris anim culpa magna incididunt occaecat."
          },
          {
            "id": "03d91929-2d4c-4500-b509-3edce23d7db2",
            "name": {
              "first": "Flossie",
              "last": "Delacruz"
            },
            "title": "",
            "text": "Pariatur nostrud adipisicing excepteur amet id officia ea dolor. Quis exercitation esse esse amet ut. Qui aliqua irure culpa nostrud esse nisi duis veniam."
          },
          {
            "id": "8af3b396-f920-44c0-9c44-f026e06d779b",
            "name": {
              "first": "Imelda",
              "last": "Rodgers"
            },
            "title": "",
            "text": "Et culpa officia veniam id eu cillum veniam magna exercitation eiusmod reprehenderit. Minim ullamco eu qui amet laboris incididunt. Sunt Lorem aute enim aliqua ad aliquip ullamco cillum."
          },
          {
            "id": "58997b95-c058-46f6-ad1e-50c6c70bd51d",
            "name": {
              "first": "Meagan",
              "last": "Ochoa"
            },
            "title": "",
            "text": "Dolore amet consequat velit proident culpa sunt sint do nostrud reprehenderit. Id cillum veniam elit quis consequat dolor velit dolor id tempor fugiat fugiat. Nulla dolor culpa laboris nostrud."
          },
          {
            "id": "1335e865-2d45-401f-a508-24a01a9f59cf",
            "name": {
              "first": "Mae",
              "last": "Bolton"
            },
            "title": "",
            "text": "Et enim eiusmod est esse dolor fugiat enim pariatur veniam ullamco veniam. Sunt esse duis incididunt labore esse nostrud. Minim exercitation consequat irure eu nostrud mollit amet et exercitation anim consequat reprehenderit."
          },
          {
            "id": "b8bf9bde-3af2-425c-9e6f-b4ddd9c717f8",
            "name": {
              "first": "Acevedo",
              "last": "Guerra"
            },
            "title": "",
            "text": "Id Lorem excepteur ut proident laboris culpa qui Lorem occaecat incididunt consectetur commodo exercitation voluptate. Ipsum cillum est eu et esse eiusmod ex duis ullamco laboris esse. Eu deserunt adipisicing sunt sint adipisicing sunt ex adipisicing eiusmod reprehenderit sint."
          },
          {
            "id": "4b71a94e-f2ac-4a0f-92ce-9e5c3fb05283",
            "name": {
              "first": "Vicki",
              "last": "Graves"
            },
            "title": "",
            "text": "Tempor ipsum ipsum reprehenderit veniam proident cupidatat proident laboris anim sunt commodo esse consectetur. Culpa veniam adipisicing voluptate minim laborum tempor aute id reprehenderit. Aute mollit est ut consequat deserunt magna qui deserunt sit."
          },
          {
            "id": "be373f81-05bc-4dc9-b751-66c4ce906045",
            "name": {
              "first": "Mason",
              "last": "Wood"
            },
            "title": "",
            "text": "Mollit laborum ullamco ipsum id nulla esse velit laborum. Aliquip ipsum excepteur nulla ut. Magna tempor occaecat non nulla qui reprehenderit aliquip."
          }
        ]
      },
      {
        "id": "581484f0f782fb2929ed738d",
        "isRead": true,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Hammond",
          "last": "Campbell"
        },
        "title": "Velit quis ullamco pariatur culpa sint exercitation aliquip reprehenderit.",
        "text": "Esse quis irure sunt amet esse cillum laboris nisi ut commodo. Enim et ullamco fugiat nostrud tempor duis eu ut magna. Do eu est reprehenderit excepteur ad ut labore nisi est id ullamco anim.\n\nLaborum ipsum laborum enim magna amet nulla incididunt ea. Anim enim commodo cillum duis deserunt nulla Lorem amet. Qui do ut amet elit laborum eiusmod veniam adipisicing aliquip ullamco amet voluptate. Voluptate Lorem ex occaecat irure. Excepteur reprehenderit est aute pariatur.",
        "comments": [
          {
            "id": "5e0dd915-bdd5-4678-8abc-ce82c563d807",
            "name": {
              "first": "Claudia",
              "last": "Butler"
            },
            "title": "",
            "text": "Voluptate enim voluptate pariatur duis Lorem ea id incididunt irure aliqua fugiat. Cillum aliqua nisi voluptate id proident fugiat. Et sit consectetur do sint ea elit laborum nisi dolore nulla amet nulla culpa ut."
          },
          {
            "id": "d8e3ff0f-1c9e-4557-8974-864aac2423fd",
            "name": {
              "first": "Cara",
              "last": "Cleveland"
            },
            "title": "",
            "text": "Ut ipsum magna incididunt qui deserunt exercitation culpa laborum irure nostrud amet exercitation excepteur et. Cupidatat elit elit cupidatat nisi cillum aliqua et sint fugiat deserunt. Labore est proident velit Lorem est anim anim Lorem enim consectetur culpa deserunt voluptate reprehenderit."
          },
          {
            "id": "2d849494-34fa-4c7c-8804-4be0c0c14284",
            "name": {
              "first": "Kirkland",
              "last": "Moss"
            },
            "title": "",
            "text": "Excepteur eiusmod culpa aliqua aute cillum sit. Laboris non quis laboris Lorem ut labore. Nulla nostrud nisi est tempor laboris fugiat."
          },
          {
            "id": "62488eab-6acd-454d-9425-682e9a89d33c",
            "name": {
              "first": "Mamie",
              "last": "Snyder"
            },
            "title": "",
            "text": "Ipsum in consequat consectetur ex aliqua. Velit ut occaecat ut labore culpa cillum consequat ipsum. Mollit cillum reprehenderit qui adipisicing esse est commodo veniam non."
          },
          {
            "id": "4cb43ec2-d234-4179-a138-951a7e7a4bbf",
            "name": {
              "first": "Patton",
              "last": "Head"
            },
            "title": "",
            "text": "Nostrud voluptate consequat nulla do sint aliqua consequat. Incididunt ut aliqua consectetur cupidatat sunt. Nisi voluptate ut nostrud commodo nulla ea Lorem reprehenderit nostrud dolor pariatur."
          },
          {
            "id": "cefb477d-e609-4782-815b-958461c83f85",
            "name": {
              "first": "Enid",
              "last": "Cunningham"
            },
            "title": "",
            "text": "Irure deserunt proident cillum reprehenderit labore sunt eu sint aliquip dolore ullamco velit in ea. Tempor laboris magna ullamco officia sint ad duis do sint eu exercitation. Magna tempor deserunt pariatur voluptate esse ut commodo incididunt esse minim laboris."
          },
          {
            "id": "6d92851c-49a6-45e8-955d-78d1f62381a3",
            "name": {
              "first": "Tisha",
              "last": "Hubbard"
            },
            "title": "",
            "text": "Sunt commodo culpa esse ad id. Et magna esse ad cillum nisi nulla do eu et ea aliqua. Ad dolor elit officia adipisicing esse sunt ipsum culpa nisi amet magna commodo dolore culpa."
          },
          {
            "id": "f21b8f4d-6199-4604-8a2f-52bdbda45df7",
            "name": {
              "first": "Jimmie",
              "last": "Frederick"
            },
            "title": "",
            "text": "Laboris qui nisi irure in consectetur enim non nostrud id consequat enim tempor aliquip sint. Fugiat deserunt culpa ut cupidatat id consectetur do do aute in. Amet amet aliquip cupidatat ea mollit non in cillum duis officia irure deserunt."
          },
          {
            "id": "1820154e-5b66-4ae9-92a1-d64e5c915700",
            "name": {
              "first": "Moon",
              "last": "Wheeler"
            },
            "title": "",
            "text": "Elit anim aliquip nulla eiusmod. Do irure quis ut cillum tempor officia laboris commodo. Reprehenderit id Lorem mollit qui incididunt non nulla commodo sit tempor reprehenderit quis."
          },
          {
            "id": "eaca6da2-be9d-4d1a-ab0a-6c07b7a80595",
            "name": {
              "first": "Lily",
              "last": "Jones"
            },
            "title": "",
            "text": "Enim et nulla minim commodo exercitation anim aliquip aliqua non pariatur dolore fugiat nulla ullamco. Qui sunt deserunt duis mollit irure ut nostrud sunt. Ut esse veniam dolore sunt mollit fugiat nisi ea cillum est officia."
          }
        ]
      },
      {
        "id": "581484f0f741d3097d65b8b6",
        "isRead": false,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Simone",
          "last": "Ward"
        },
        "title": "Excepteur elit do in sit consequat fugiat occaecat mollit ex do.",
        "text": "Aliquip fugiat quis nostrud do cupidatat ullamco cupidatat sunt est veniam do enim est. Ipsum occaecat voluptate cupidatat pariatur ea veniam magna do commodo minim. Labore est nulla pariatur sunt excepteur. Aute culpa magna adipisicing sint non enim dolore magna minim consectetur. Enim consectetur irure veniam proident dolore ut sit velit voluptate labore amet ex quis esse. Deserunt esse pariatur velit incididunt fugiat sint veniam laboris eu sunt occaecat occaecat.\n\nMinim consequat incididunt amet aliquip. Aliqua nulla eiusmod minim anim dolore quis tempor in eu cupidatat ex. Esse dolor ea deserunt incididunt. Do do do sit voluptate aliqua elit id. Qui minim excepteur veniam ex velit nostrud.",
        "comments": [
          {
            "id": "853a77bd-2a41-4638-b448-fb87b4cdbce7",
            "name": {
              "first": "Imogene",
              "last": "Quinn"
            },
            "title": "",
            "text": "Laborum eu et velit qui aute aliquip culpa commodo eu dolor dolor. Minim magna cillum occaecat commodo sunt est ipsum enim. Incididunt ullamco laborum ad excepteur duis."
          },
          {
            "id": "953db0d9-15a6-413b-91f0-f38e05f51c97",
            "name": {
              "first": "West",
              "last": "Lucas"
            },
            "title": "",
            "text": "Do eiusmod sunt elit incididunt fugiat nulla pariatur. Eiusmod ea est cillum ad adipisicing dolore veniam dolor ad officia. Proident aliqua in consequat enim duis laboris."
          },
          {
            "id": "7072f967-0e23-485b-afbb-1ffacb110209",
            "name": {
              "first": "Macdonald",
              "last": "Montoya"
            },
            "title": "",
            "text": "Nostrud eu ex minim ad excepteur minim excepteur voluptate minim qui officia. Proident culpa nulla eiusmod consequat consequat qui. Consequat mollit irure anim ea duis voluptate."
          },
          {
            "id": "ce5c0227-939a-4a34-ac76-76a7dc44c270",
            "name": {
              "first": "Madeleine",
              "last": "Rhodes"
            },
            "title": "",
            "text": "Officia tempor pariatur proident duis. Anim ut laborum tempor excepteur qui dolore veniam et sunt adipisicing ea sint. Voluptate veniam nisi aliquip nisi Lorem ut quis."
          },
          {
            "id": "b81fa811-56f7-417e-8347-d055fc7313a1",
            "name": {
              "first": "Dennis",
              "last": "Knapp"
            },
            "title": "",
            "text": "Consectetur proident officia sit nisi aliquip. Non quis nulla ea magna amet Lorem reprehenderit quis occaecat aliquip aliquip enim. Laboris consequat non qui amet elit anim velit elit amet velit magna."
          },
          {
            "id": "fcb35b0a-e597-471e-b5b1-e2bcfcffe24d",
            "name": {
              "first": "Morin",
              "last": "David"
            },
            "title": "",
            "text": "Veniam nulla ut officia culpa sunt excepteur eiusmod. Eu quis dolor quis consequat elit consectetur magna et laborum consequat velit ut pariatur duis. Culpa sunt anim et consequat commodo non veniam proident."
          },
          {
            "id": "14d0d2d5-53eb-4459-accb-8e60cdfee009",
            "name": {
              "first": "Sheree",
              "last": "Mcdaniel"
            },
            "title": "",
            "text": "Nostrud incididunt magna cupidatat occaecat voluptate esse deserunt qui cillum do ullamco fugiat tempor nulla. Tempor ad cillum culpa excepteur duis culpa ex exercitation ipsum irure adipisicing et ea. Cupidatat qui cupidatat mollit eu mollit dolore eiusmod cupidatat voluptate voluptate mollit voluptate ea consectetur."
          }
        ]
      },
      {
        "id": "581484f0a466c89d8e7629ab",
        "isRead": true,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Whitney",
          "last": "Greene"
        },
        "title": "Laborum adipisicing nostrud exercitation tempor commodo et occaecat in et mollit excepteur esse.",
        "text": "Duis in ex ex magna in fugiat aliquip. Est esse ipsum aliqua proident sunt consectetur mollit nisi dolore in exercitation cillum. Duis commodo tempor non laboris deserunt culpa reprehenderit commodo. Est magna adipisicing aliquip nulla. Cillum deserunt dolor in consectetur adipisicing quis officia dolore. Deserunt eiusmod culpa tempor anim irure id Lorem ex magna adipisicing aliquip voluptate anim.\n\nUt reprehenderit aliqua quis dolore tempor velit ipsum eu laborum occaecat. Est reprehenderit amet incididunt ullamco anim duis tempor minim id culpa culpa ut ea pariatur. Labore ad cillum dolor ipsum ea mollit nisi. Nulla aute ea aliquip officia aliqua veniam adipisicing proident eiusmod veniam sit consectetur nisi.",
        "comments": [
          {
            "id": "f07fc09f-7e33-4009-b74a-9b8c1aa6481d",
            "name": {
              "first": "Shauna",
              "last": "Henderson"
            },
            "title": "",
            "text": "Dolore officia nisi ad nostrud do ad laboris anim. Occaecat duis nisi ullamco deserunt. Qui nostrud ex Lorem in sint sit esse laboris."
          },
          {
            "id": "0352bef1-993e-4731-88fa-2938d250f24d",
            "name": {
              "first": "Valencia",
              "last": "Shaw"
            },
            "title": "",
            "text": "Aliqua nisi laborum aliquip in incididunt ullamco consectetur adipisicing in ex. Et deserunt dolor elit amet labore. In magna qui nisi aute exercitation ipsum ut Lorem culpa labore laborum eiusmod."
          },
          {
            "id": "0e05ab00-3269-4eac-ac4e-e2f6a067aa99",
            "name": {
              "first": "Alyssa",
              "last": "Nichols"
            },
            "title": "",
            "text": "Aliquip velit voluptate et culpa laborum laboris dolor. Dolor esse aute consequat non proident anim nulla fugiat nostrud nostrud elit Lorem. Qui proident laboris nisi ad eiusmod enim sunt occaecat duis ullamco qui laboris voluptate."
          },
          {
            "id": "90ba32f7-4d26-4cad-9626-1ae5acb703f0",
            "name": {
              "first": "Barrera",
              "last": "Puckett"
            },
            "title": "",
            "text": "Sit et laborum velit tempor est culpa in ut labore. Velit ea et ea ad ut id adipisicing amet laborum do consectetur. Proident incididunt cillum veniam adipisicing consequat voluptate ea voluptate et cupidatat pariatur et."
          },
          {
            "id": "7dc812a9-31af-49ff-ae86-b2879b117032",
            "name": {
              "first": "Barlow",
              "last": "Murray"
            },
            "title": "",
            "text": "Exercitation Lorem minim esse ex consequat qui. Cillum commodo ea aliqua fugiat ad voluptate laboris ea do irure officia aliqua anim amet. Deserunt anim culpa laborum magna eu commodo cillum exercitation."
          },
          {
            "id": "5d0fa752-bff9-4aef-9695-8f70da9d4ce7",
            "name": {
              "first": "Clark",
              "last": "Collier"
            },
            "title": "",
            "text": "Et cupidatat ut velit consectetur elit cupidatat cillum laboris fugiat cillum aute. Occaecat aliquip minim irure irure sunt cillum est aute sunt consequat elit enim. Nostrud commodo magna incididunt incididunt veniam qui irure officia ex qui sunt."
          },
          {
            "id": "8cff9b62-221c-45e8-a94a-56aae7843943",
            "name": {
              "first": "Wagner",
              "last": "Washington"
            },
            "title": "",
            "text": "Id reprehenderit nostrud dolor mollit. Quis enim consequat qui adipisicing amet veniam fugiat in. Adipisicing eu amet aute commodo dolor quis eu anim incididunt aliqua dolor."
          },
          {
            "id": "d8fad7de-9022-4df0-be30-54c8bb8b34ef",
            "name": {
              "first": "Wheeler",
              "last": "Cooper"
            },
            "title": "",
            "text": "Nostrud occaecat proident dolore non ea duis duis veniam consectetur est. Eiusmod proident nulla consectetur eiusmod ad. Exercitation duis magna voluptate mollit proident."
          },
          {
            "id": "07522157-2e7c-4bb8-bbdd-8af56c0d9147",
            "name": {
              "first": "Henry",
              "last": "Rowe"
            },
            "title": "",
            "text": "Aliqua ullamco sint anim officia. Eu pariatur tempor et aliquip enim fugiat nulla id aute aliquip aute. Labore anim consequat exercitation adipisicing ut irure eiusmod excepteur sint commodo enim sit velit aliqua."
          },
          {
            "id": "46ff20db-bb9b-4c32-bf59-3282f7d9899b",
            "name": {
              "first": "Church",
              "last": "Henson"
            },
            "title": "",
            "text": "Nostrud aliquip voluptate eu pariatur consectetur elit elit sint ea reprehenderit. Nostrud commodo ex Lorem officia pariatur veniam nisi exercitation et nostrud elit velit. Minim qui ipsum officia sit aliqua eiusmod dolor."
          }
        ]
      },
      {
        "id": "581484f0d120fd7261b1c04d",
        "isRead": true,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Tessa",
          "last": "Tyler"
        },
        "title": "Commodo laboris incididunt pariatur duis commodo dolore reprehenderit nostrud.",
        "text": "Voluptate excepteur pariatur occaecat laboris esse ipsum ea excepteur commodo nulla fugiat ad enim. Magna ea sint in id in deserunt esse velit. Reprehenderit amet labore fugiat ipsum ex velit. Ut sint in proident magna deserunt. Eiusmod veniam in aliquip aliqua in commodo amet elit ea sunt qui fugiat. Sit exercitation excepteur est veniam consequat ut exercitation in enim proident proident anim consequat. Sit aliqua velit sint cupidatat.\n\nMinim consequat ad duis aliqua ad. Deserunt commodo exercitation in qui deserunt. Incididunt occaecat aliqua adipisicing deserunt dolor officia ut veniam amet sunt dolor. Fugiat ut elit laborum exercitation. Ea veniam sunt dolore ex laborum quis ut nostrud cupidatat amet Lorem magna.",
        "comments": [
          {
            "id": "7b132d91-8c1d-4d01-99d0-c9f6fe5b27ce",
            "name": {
              "first": "Joni",
              "last": "Kennedy"
            },
            "title": "",
            "text": "Proident do consectetur non nisi. Anim do labore est nisi esse culpa pariatur sint anim esse. Eu qui quis ullamco qui non labore ex ut non nisi id esse laboris consectetur."
          },
          {
            "id": "bce68508-504f-4341-b873-7e72ff19e9de",
            "name": {
              "first": "Riggs",
              "last": "Higgins"
            },
            "title": "",
            "text": "Fugiat minim officia velit mollit exercitation duis sit ea incididunt laboris aute quis cillum. Elit eiusmod id laboris do irure occaecat aute sit qui. Nostrud quis nostrud Lorem ut do qui sint elit Lorem consectetur laboris cillum do quis."
          },
          {
            "id": "b948f3c9-1aa8-4ef4-8d81-c1eab2502db1",
            "name": {
              "first": "Melva",
              "last": "Warner"
            },
            "title": "",
            "text": "Sunt occaecat dolore dolor officia. Cupidatat aliqua ullamco officia ad mollit reprehenderit nulla. Occaecat nisi dolore magna minim proident adipisicing aute commodo velit."
          },
          {
            "id": "2d77da49-0260-4375-9f07-ee80570c4e73",
            "name": {
              "first": "Forbes",
              "last": "Moreno"
            },
            "title": "",
            "text": "Commodo exercitation consectetur laborum cupidatat minim qui laboris. Enim quis est dolore labore enim exercitation duis consequat officia nostrud reprehenderit magna. Laborum ea culpa amet deserunt consectetur ea magna reprehenderit culpa."
          },
          {
            "id": "b4411ca2-66ce-4b31-8851-98c4d513b353",
            "name": {
              "first": "Maynard",
              "last": "Wilder"
            },
            "title": "",
            "text": "Deserunt et aliquip exercitation aliqua nostrud aliqua occaecat ipsum cillum Lorem commodo. Dolor est nulla quis anim cillum culpa ut do occaecat est. Nulla eu culpa quis ad id officia eu aliquip velit esse dolore consequat dolore."
          },
          {
            "id": "2b1aa1c8-82b2-4f50-969c-9d50c7cffae1",
            "name": {
              "first": "Yvette",
              "last": "Strong"
            },
            "title": "",
            "text": "Eiusmod exercitation ea est non esse id exercitation Lorem culpa cillum fugiat. Duis sint non reprehenderit reprehenderit quis qui ad aute laboris qui qui amet adipisicing. Dolor reprehenderit Lorem anim veniam culpa do Lorem commodo adipisicing non."
          },
          {
            "id": "16c777d3-2d75-432e-98de-c2e81df77bec",
            "name": {
              "first": "Downs",
              "last": "Goodwin"
            },
            "title": "",
            "text": "Ad sit eu eiusmod laboris eu non do anim. Ut consectetur minim laboris non elit nisi incididunt reprehenderit. Minim irure laboris adipisicing consequat qui officia pariatur cillum id ex in voluptate."
          },
          {
            "id": "4a22e5b2-677d-403a-b29b-19be7282c953",
            "name": {
              "first": "Audra",
              "last": "Bell"
            },
            "title": "",
            "text": "In anim anim laborum cupidatat commodo sit esse proident qui. Eu consequat nisi sint tempor laboris proident aliquip cillum Lorem ullamco. Fugiat do amet mollit officia voluptate reprehenderit do ullamco nulla irure excepteur magna."
          },
          {
            "id": "34429dde-bf14-43ec-82ba-da25f8b3d73a",
            "name": {
              "first": "Perez",
              "last": "Vaughn"
            },
            "title": "",
            "text": "Aliquip qui aute eu dolore laborum dolor id cupidatat cupidatat qui nisi proident. Do et nisi do reprehenderit consequat sit dolore nulla commodo. Laboris sunt mollit cillum non pariatur do adipisicing veniam cillum elit dolor eu in eiusmod."
          }
        ]
      },
      {
        "id": "581484f17c8ea3d1ec6afa9b",
        "isRead": true,
        "picture": "http://placehold.it/32x32",
        "name": {
          "first": "Gracie",
          "last": "Tucker"
        },
        "title": "Consequat dolor excepteur id irure exercitation irure laborum occaecat deserunt pariatur.",
        "text": "Aliqua officia sunt nostrud officia fugiat. Laboris sit cillum commodo fugiat pariatur. Dolore amet dolore sunt consequat minim. Aute nostrud tempor est do exercitation. Consectetur proident tempor cillum nisi. Aute Lorem nostrud anim quis consectetur ut deserunt deserunt commodo minim non quis minim esse.\n\nUllamco occaecat eu magna in adipisicing aliquip est exercitation deserunt quis. Officia culpa mollit quis aute mollit est magna consequat. Non aute ex Lorem ea sunt id dolore laborum officia. In nostrud est aute laborum amet cupidatat in cupidatat voluptate eu. Nisi id ea tempor commodo officia non adipisicing magna.",
        "comments": [
          {
            "id": "9fdb8af0-943f-4d54-8de0-0ce657456a10",
            "name": {
              "first": "Nixon",
              "last": "Mooney"
            },
            "title": "",
            "text": "Enim ex consectetur Lorem ut laborum eiusmod ad ea. Minim proident ad labore cupidatat labore exercitation irure magna aute ea ex ad est minim. Qui laboris consequat aute est eiusmod."
          },
          {
            "id": "23d912e2-7759-4e5b-a040-a4e51f48d910",
            "name": {
              "first": "Glass",
              "last": "Duffy"
            },
            "title": "",
            "text": "Eu ex in proident irure duis ad sit. Consectetur Lorem adipisicing ex exercitation sint ad deserunt enim consectetur dolore. Exercitation ad occaecat elit exercitation deserunt aliquip do laborum ad commodo elit velit enim elit."
          },
          {
            "id": "95af3ac8-b37c-48a8-adcb-2421010e643b",
            "name": {
              "first": "James",
              "last": "Rodriguez"
            },
            "title": "",
            "text": "Eiusmod ut sunt nisi ut elit laborum ullamco elit. Excepteur id mollit cupidatat esse incididunt. Cupidatat laborum cillum sint deserunt esse proident cupidatat ut voluptate."
          },
          {
            "id": "671a8634-58c6-4db4-9f98-2af5d43be232",
            "name": {
              "first": "Gabriela",
              "last": "Garrison"
            },
            "title": "",
            "text": "Officia ullamco Lorem ad enim exercitation. Aliquip sunt do eiusmod minim mollit cupidatat dolore voluptate deserunt id consectetur esse proident excepteur. Sint laborum Lorem commodo in."
          },
          {
            "id": "705f0986-a21d-42a3-ba81-50956534986d",
            "name": {
              "first": "Roberts",
              "last": "Meadows"
            },
            "title": "",
            "text": "Aute reprehenderit cupidatat esse do sit et cillum. Labore dolore enim adipisicing laborum occaecat nisi duis ipsum id. Sint est laboris elit enim esse proident nostrud incididunt ullamco aute."
          },
          {
            "id": "5e41fc1b-1c2b-49c3-bab1-527bd1b49e10",
            "name": {
              "first": "Herminia",
              "last": "Vaughan"
            },
            "title": "",
            "text": "Officia mollit cupidatat proident ipsum exercitation. Labore qui et in enim quis proident nostrud exercitation aliqua Lorem veniam cillum commodo ad. Nostrud ut eiusmod ea aliqua."
          },
          {
            "id": "d6b1db1b-a91e-4d53-b7e0-9a57641a3cf5",
            "name": {
              "first": "Daphne",
              "last": "Ortiz"
            },
            "title": "",
            "text": "Culpa magna elit aute cupidatat voluptate culpa quis magna aute culpa minim cupidatat. Qui dolor sunt do labore esse labore ipsum eiusmod reprehenderit dolor proident ad. Eiusmod et ea et ut irure."
          },
          {
            "id": "2541cf54-f04e-4c41-8a5c-09d1b2ffc66c",
            "name": {
              "first": "Orr",
              "last": "Bruce"
            },
            "title": "",
            "text": "Minim duis non nostrud culpa et minim. Exercitation commodo consectetur consectetur minim. Adipisicing pariatur Lorem incididunt voluptate laboris aute deserunt Lorem velit et."
          },
          {
            "id": "3eea62d7-eed1-4e54-a55c-6d896b98a2c3",
            "name": {
              "first": "Janice",
              "last": "Barnett"
            },
            "title": "",
            "text": "Fugiat et aliquip anim sint. Veniam laborum aliqua Lorem reprehenderit officia. Magna pariatur non proident eu proident sint nisi exercitation est excepteur eu veniam."
          }
        ]
      }
    ]

    toggleComments (articleId) {
        var {indexOpenArticle} = this.state;

        if (indexOpenArticle === articleId) {
            indexOpenArticle = null;
        } else {
            indexOpenArticle = articleId;
        }

        this.setState({
            indexOpenArticle: indexOpenArticle
        });
    }

    render () {
        var articles = this.articles,
            {indexOpenArticle} = this.state;

        return (
            <div className='articles'>
                <div>Articles: {this.articles.length}</div>
                {this.articles.map(
                    article => <Article
                                    key={article.id}
                                    article={article}
                                    showComments={indexOpenArticle === article.id}
                                    toggleComments={this.toggleComments.bind(this, article.id)}
                                    />)}
            </div>
        );
    }
}

export default ArticlesList;

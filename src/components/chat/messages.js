const messages = [
    // {
    //   _id: 1,
    //   text: 'Chat de grupo',
    //   createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    //   system: true,
    // },
    {
      _id: 1,
      text: 'Muy buenas tardes compas',
      createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Carlos Castillo',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-1/23621647_1574745289268698_75971956595828836_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=aty_UkXJz58AX_91JL9&_nc_ht=scontent.fgye4-1.fna&oh=8ab6c6babb4496d7cc6c9f27cadec50c&oe=5F42415D',
      },
    },
    {
      _id: 2,
      text: 'Muy buenas tardes mi estimado JES JES',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Carlos Juca',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=GmJ-WM1dJ5sAX8KXCAb&_nc_oc=AQkL5fQilfo98yOXU-FONaVtGREbwyaXJc0sXZQlpTT736AGzv8mp_npuJ25sWhMvSA&_nc_ht=scontent.fgye4-1.fna&oh=8b2b473c02e4605d28a50d6fda094d06&oe=5F41BCCE',
      },
      //image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 3,
      text: 'Como le va compañero Carlitos',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
      user: {
        _id: 3,
        name: 'Gerson Santos',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/s960x960/53023838_2075222785897105_1051328842108502016_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=rj_zserA35IAX-o4L0x&_nc_ht=scontent.fgye4-1.fna&_nc_tp=7&oh=8e5b88be42f7e75137e4361286344854&oe=5F447EF7',
      },
      // quickReplies: {
      //   type: 'radio', // or 'checkbox',
      //   keepIt: true,
      //   values: [
      //     {
      //       title: '😋 Yes',
      //       value: 'yes',
      //     },
      //     {
      //       title: '📷 Yes, let me show you with a picture!',
      //       value: 'yes_picture',
      //     },
      //     {
      //       title: '😞 Nope. What?',
      //       value: 'no',
      //     },
      //   ],
      // },
    },
    {
      _id: 4,
      text: 'esperando a que acabes las pantallas compañero',
      createdAt: new Date(Date.UTC(2016, 5, 15, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Carlos Castillo',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-1/23621647_1574745289268698_75971956595828836_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=aty_UkXJz58AX_91JL9&_nc_ht=scontent.fgye4-1.fna&oh=8ab6c6babb4496d7cc6c9f27cadec50c&oe=5F42415D',
      },
      // quickReplies: {
      //   type: 'checkbox', // or 'radio',
      //   values: [
      //     {
      //       title: 'Yes',
      //       value: 'yes',
      //     },
      //     {
      //       title: 'Yes, let me show you with a picture!',
      //       value: 'yes_picture',
      //     },
      //     {
      //       title: 'Nope. What?',
      //       value: 'no',
      //     },
      //   ],
      // },
    },
    {
      _id: 5,
      text: 'Que fue las pantallas mmv',
      createdAt: new Date(Date.UTC(2016, 5, 15, 18, 20, 0)),
      user: {
        _id: 1,
        name: 'Carlos Castillo',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-1/23621647_1574745289268698_75971956595828836_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=aty_UkXJz58AX_91JL9&_nc_ht=scontent.fgye4-1.fna&oh=8ab6c6babb4496d7cc6c9f27cadec50c&oe=5F42415D',
      },
    },
    {
      _id: 6,
      text: 'Revisen este link porfavor http://www.google.com ',
      createdAt: new Date(Date.UTC(2016, 5, 16, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Carlos Juca',
        avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=GmJ-WM1dJ5sAX8KXCAb&_nc_oc=AQkL5fQilfo98yOXU-FONaVtGREbwyaXJc0sXZQlpTT736AGzv8mp_npuJ25sWhMvSA&_nc_ht=scontent.fgye4-1.fna&oh=8b2b473c02e4605d28a50d6fda094d06&oe=5F41BCCE',
      },
    },
  ];
  
  export default messages;